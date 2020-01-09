// 引用基础模型
const Base = require('./base.js');

// 定义用户模型并基础基础模型
class Class extends Base {
  // 定义参数默认值为 users 表
  constructor(props = 'class') {
    super(props);
  }
}

module.exports = new Class()