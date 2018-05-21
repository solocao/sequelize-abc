const Sequelize = require('sequelize')

const connection = new Sequelize('demo_schema', 'root', 'root', {
  host: 'localhost',
  port: 3306,
  // 数据库使用mysql
  'dialect': 'mysql'
})

const Article = connection.define('article', {
  title: Sequelize.STRING,
  content: Sequelize.TEXT
})

// sync 做两件事情
// 第一、连接数据库
// 第二、创建一个对应数据库
connection.sync().then(() => {
  Article.create({
    title: 'demo title',
    content: 'Lorem ipsum dolor'
  })
})
