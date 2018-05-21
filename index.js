const Sequelize = require('sequelize')

const sequelize = new Sequelize('api', 'root', 'root', {
  host: 'localhost',
  port: 3306,
  // 数据库使用mysql
  'dialect': 'mysql'
})

sequelize.authenticate()
  .then(() => {
    console.log('连接成功')
  })
  .catch((err) => {
    console.log(err)
  })
