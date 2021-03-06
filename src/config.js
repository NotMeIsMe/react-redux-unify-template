// app 运行环境配置
const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV];

// 用户webpack的cdn配置
const externals = {
  development: {
    externals: {
    }
  },
  production: {
    // not mini version for production in development env
    externals: {
      react: 'http://cdn.bootcss.com/react/15.4.2/react.min.js',
      reactDom: 'http://cdn.bootcss.com/react/15.4.2/react-dom.min.js',
      fetch: 'http://cdn.bootcss.com/fetch/2.0.2/fetch.min.js',
      reactRouter: 'http://cdn.bootcss.com/react-router/3.0.2/ReactRouter.min.js', // 使用高版本的cdn会有问题
      reactRedux: 'http://cdn.bootcss.com/react-redux/4.0.0/react-redux.min.js',
      redux: 'http://cdn.bootcss.com/redux/3.0.4/redux.min.js',
      reduxForm: 'http://cdn.bootcss.com/redux-form/6.4.3/redux-form.min.js'
    }
  }
}[process.env.NODE_ENV];


module.exports = Object.assign({
  host: process.env.HOST,
  port: process.env.PORT,
  apiHost: process.env.APIHOST,
  apiPort: process.env.APIPORT,
  devPort: process.env.DEVPORT,
  app: {
    title: 'React Redux Example',
    description: 'All the modern best practices in one example.',
    head: {
      titleTemplate: 'React Redux Example: %s',
      meta: [
        { name: 'description', content: 'All the modern best practices in one example.' },
        { charset: 'utf-8' },
        { property: 'og:site_name', content: 'React Redux Example' },
        { property: 'og:image', content: 'https://react-redux.herokuapp.com/logo.jpg' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:title', content: 'React Redux Example' },
        { property: 'og:description', content: 'All the modern best practices in one example.' },
        { property: 'og:card', content: 'summary' },
        { property: 'og:site', content: '@erikras' },
        { property: 'og:creator', content: '@erikras' },
        { property: 'og:image:width', content: '200' },
        { property: 'og:image:height', content: '200' }
      ]
    }
  }

}, environment, externals);
