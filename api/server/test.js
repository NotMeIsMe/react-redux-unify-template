const router = require('express').Router;
const toolsApi = router();

toolsApi.get('/hello', (req, res) => {
  const data = {
    data: {
      user: {
        name: '黄建双',
        age: 24
      }
    }
  };
  res.status(200).send(JSON.stringify(data));
});

export default toolsApi;

