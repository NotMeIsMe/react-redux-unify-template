// 测试获取用户信息
export function getUser (values) {
  return new Promise((resolve, reject) => {
    fetch('./hello', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(values)
    }).then(res => res.json())
      .then(res => {
        resolve(res);
      });
  });
}
