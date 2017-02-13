// 修改async-redux, 可以dis嵌套action

const isPromise = obj => obj && typeof obj.then === 'function';
const hasPromiseProps = obj => Object.keys(obj).some(key => isPromise(obj[key]));

const resolveProps = obj => {
  const props = Object.keys(obj);
  const values = props.map(prop => obj[prop]);

  return Promise.all(values).then(resolvedArray => {
    return props.reduce((acc, prop, index) => {
      acc[prop] = resolvedArray[index];
      return acc;
    }, {});
  });
};

const getNonPromiseProperties = obj => {
  return Object.keys(obj).filter(key => !isPromise(obj[key])).reduce((acc, key) => {
    acc[key] = obj[key];
    return acc;
  }, {});
};


export default function promisePropsMiddleware () {
  return next => action => {
    const { types, payload } = action;
    if (!types || !hasPromiseProps(action.payload)) {
      return next(action);
    }

    const nonPromiseProperties = getNonPromiseProperties(payload);

    const [PENDING, RESOLVED, REJECTED] = types;

    const pendingAction = { type: PENDING, payload: nonPromiseProperties };
    const successAction = { type: RESOLVED };
    const failureAction = { type: REJECTED, error: true, meta: nonPromiseProperties };
    if (action.meta) {
      [pendingAction, successAction, failureAction].forEach(nextAction => {
        nextAction.meta = { ...nextAction.meta, ...action.meta };
      });
    }
    // 判断是否嵌套action
    pendingAction.type instanceof Array ? pendingAction.type.map(type => ({ ...pendingAction, type: type })).forEach(action => next(action))
      : next(pendingAction);

    return resolveProps(payload).then(
      results => successAction.type instanceof Array ? successAction.type.map(type => ({ ...successAction, type: type, payload: results })).forEach(action => next(action))
        : next({ ...successAction, payload: results })
      ,
      error => failureAction.type instanceof Array ? failureAction.type.map(type => ({ ...failureAction, type: type, payload: error })).forEach(action => next(action))
        : next({ ...failureAction, payload: error })
    );
  };
}

