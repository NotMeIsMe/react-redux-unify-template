const router = require('express').Router;
const toolsApi = router();

toolsApi.post('/hello', (req, res) => {
  console.log(req.body);

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

