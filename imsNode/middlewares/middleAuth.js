const authCodeFunc = require('./../utils/authCode.js');
const userModels = require('./../models/user');

const middleAuth = async function(req,res,next) {
  try{
    let token = req.headers.authorization
    console.log(token,123)
    if(!token){
      res.json({
        code: 0,
        message: '未登陆'
      })
      return
    }
  
    //解密
    let users = authCodeFunc(token,'DECODE');
    if(users.length < 1){
      res.json({
        code: 200,
        message: '该管理员账号无效'
      })
      return
    }
    let user = users.split('\t');
    let clock = await userModels.select({phone:user[0],password:user[1],id:user[2]})
    let clocks = clock.length > 0
    if(!clocks){
      res.json({
        code: 0,
        message: '该管理员账号不存在'
      })
      return
    }
    res.locals.userId = clock[0].id
    next()
  }catch(err){
    console.log(err)
    res.json({
      code: 0,
      message: '服务器错误'
    })
  }
}
module.exports = middleAuth;