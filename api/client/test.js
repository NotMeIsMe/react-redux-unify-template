
export function getUser (uid) {
  return Promise.resolve({
    data: {
      user: {
        name: '黄建双',
        age: 24
      }
    }
  });
}


