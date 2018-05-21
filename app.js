const Sequelize = require('sequelize')

const connection = new Sequelize('demo_schema', 'root', 'root', {
  host: 'localhost',
  port: 3306,
  // 数据库使用mysql
  'dialect': 'mysql'
})

const Article = connection.define('article', {
  slug: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      len: {
        args: [10, 150],
        msg: '字符串个数为10到150'
      }
    }
  },
  body: {
    type: Sequelize.TEXT
  }
}, {
    timestamps: false
  })

// sync 做两件事情
// 第一、连接数据库
// 第二、创建一个对应数据库
connection.sync(
  {
    force: true,
    logging: console.log
  }
)
  .then(() => {
    Article.create({
      slug: 'wqe1q',
      title: 'demaffewrwerwraffaf',
      body: 'Lorem ipsum dolor'
    })
  })
