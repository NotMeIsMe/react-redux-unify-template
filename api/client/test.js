
export function getUser (uid) {
  return new Promise((resolve, reject) => {
    fetch('./hello').then(res => res.json())
      .then(res => {
        resolve(res);
      });
  });
}


