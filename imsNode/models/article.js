// 引用基础模型
const Base = require('./base.js');
const knex = require('./knex.js')
// 定义用户模型并基础基础模型
class Article extends Base {
  // 定义参数默认值为 users 表
  constructor(props = 'article') {
    super(props);
  }
  joinClass(params={}){
    return knex('article')
    .join('class','article.class_id','=','class.id')
    .select(
      'article.id',
      'article.name',
      'article.time',
      'article.content',
      {'class_name':'class.name'}
    ).where(params)
  }
}

module.exports = new Article ()