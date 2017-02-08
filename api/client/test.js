
export function getUser (uid) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: {
          user: {
            name: '黄建双',
            age: 24
          }
        }
      });
    }, 2000);
  });
}


