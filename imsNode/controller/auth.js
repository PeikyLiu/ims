const User = require('./../models/user.js');
const authCodeFunc = require('./../utils/authCode.js');

const authController = {
  login: async function(req,res,next) {
    let phone = req.body.phone;
    let password = req.body.password;
    console.log(phone)
    if(!phone || !password) {
      res.json({
        code: 0,
        message: '缺少必要参数'
      });
      return
    }
    try{
      const users = await User.select({ phone,password });
      const user = users[0]
      console.log(user.name,123)
      if(user){
        let auth_Code = phone+'\t'+password+'\t'+user.id;
        auth_Code = authCodeFunc(auth_Code,'ENCODE');
        res.cookie('ac',auth_Code,{ maxAge: 24* 60* 60* 1000, httpOnly:true });
        res.json({
          code: 200,
          message: '登陆成功',
          data: {auth_Code, userName: user.name, userPerson: user.person}
        })
      }else{
        res.json({
          code: 0,
          message: '登陆失败，没有此用户'
        })
      }
    }catch(e){
      res.json({
        code: 0,
        message: '系统问题请管理员处理'
      })
    }
  }
}
module.exports = authController;