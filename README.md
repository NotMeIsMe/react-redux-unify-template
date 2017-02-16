##react-redux-unify-template
![image](https://github.com/2637309949/react-redux-unify-template/blob/master/shot/home.png?raw=true)
![image](https://github.com/2637309949/react-redux-unify-template/blob/master/shot/dialogue.png?raw=true)  


    
####根据自己的经验集成redux, reactjs等mobie h5和普通h5网站 
####主要命令  
####1.npm run eslint check语法vscode
####2.npm run dev    开发环境热加载
####3.npm run pro    生产
  
  
  
####依赖: 
####1.修改redux-async(https://www.npmjs.com/package/redux-async)支持嵌套action
####主要: 
```
const nestActionSpread = next => (action, attach) => { 
  const typeSpread = obj => obj instanceof Object ? obj : undefined; 
  // 判断是否嵌套action 
  action.type instanceof Array 
    ? action.type 
    .map(type => ({ ...action, type: typeSpread(type) && type.type || type, ...typeSpread(type), ...attach })) 
    .forEach(action => next(action)) 
    : next({ ...action, type: typeSpread(action.type) && action.type.type || action.type, ...typeSpread(action.type), ...attach }); 
}; 
```
####(1)在redux-async基础上支持多个action 
####例子: 
```
export const userLogin = values => { 
  return { 
    types: [ [ GET_USERS_REQUEST, ROOTNOTLOADED ], [ GET_USERS_SUCCESS, ROOTLOADED, { type: SHOWTOAST, value: '加载成功' } ], [ GET_USERS_FAILURE, ROOTLOADED ] ], 
    payload: { 
      user: api.getUser(values).then(response => response.data.user), 
      uid: 0 
    } 
  }; 
}; 

const initialState = {};  
export default createReducer(initialState, {  
  [ROOTLOADED] (state, action) { 
    return { ...state, isrootLoaded: true }; 
  }, 
  [ROOTNOTLOADED] (state, action) { 
    return { ...state, isrootLoaded: false }; 
  }, 
  [SHOWTOAST] (state, action) { 
    DeadToast.makeText(action.value).show(); 
    return state; 
  } 
});
```
####2.redux-form支持表单在redux中的统一管理
####主要: 
####在hello组件测试中用到
```
class ContactForm extends Component {
  render () {
    const { handleSubmit } = this.props;
    const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
      <div>
        <label>{label}</label>
        <div>
          <input {...input} placeholder={label} type={type}/>
          {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
      </div>
    );
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <Field name="firstName" component={ renderField } type="text" label="First Name"/>
        </div>
        <div>
          <Field name="lastName" component={ renderField } type="text" label="Last Name"/>
        </div>
        <div>
          <Field name="email" component={ renderField } type="email" label="Email"/>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
```  
####2.redux-router支持用户权限
####这里只是简单判断user字段, 具体的可以展开
```
export default (store) => {
  const requireLogin = (nextState, replace, cb) => {
    const state = store.getState();
    const user = state.auth && state.auth.user;
    if (!user) {
      replace('/');
    }
    cb();
  };
  // onEnter 的使用技巧
  // https://github.com/ReactTraining/react-router/blob/master/docs/API.md
  return <Route path="/" component={Index}>
              <IndexRoute component={Home} />
              <Route onEnter={requireLogin}>
                <Route path="messbox" component={MessBox}/>
                <Route path="dialogue" component={Dialogue}/>
              </Route>
          </Route>;
};

```
