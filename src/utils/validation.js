// from react-redux-universal-hot-example-master

const isEmpty = value => value === undefined || value === null || value === '';
/*eslint-disable*/
const join = (rules) => (value, data) => rules.map(rule => rule(value, data)).filter(error => !!error)[0 /* first error */ ];
/*eslint-enable*/

export function email (value) {
  // Let's not start a debate on email regex. This is just for an example app!
  if (!isEmpty(value) && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return '邮箱无效';
  }
}

export function required (value) {
  if (isEmpty(value)) {
    return '信息必填';
  }
}

export function minLength (min) {
  return value => {
    if (!isEmpty(value) && value.length < min) {
      return `不小于${min}个字符`;
    }
  };
}

export function maxLength (max) {
  return value => {
    if (!isEmpty(value) && value.length > max) {
      return `不大于${max}个字符`;
    }
  };
}

export function integer (value) {
  if (!Number.isInteger(Number(value))) {
    return '需为整数';
  }
}

export function oneOf (enumeration) {
  return value => {
    if (!~enumeration.indexOf(value)) {
      return `需为${enumeration.join(', ')}之一`;
    }
  };
}

export function match (field) {
  return (value, data) => {
    if (data) {
      if (value !== data[field]) {
        return '信息不匹配';
      }
    }
  };
}

export function createValidator (rules) {
  return (data = {}) => {
    const errors = {};
    Object.keys(rules).forEach((key) => {
      const rule = join([].concat(rules[key])); // concat enables both functions and arrays of functions
      const error = rule(data[key], data);
      if (error) {
        errors[key] = error;
      }
    });
    return errors;
  };
}
