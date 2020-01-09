const User = require('./../models/user.js')
const userController = {
  insert: async function(req,res,next){
    let name = req.body.name;
    let phone = req.body.phone;
    let password = req.body.password;
    let person = req.body.person;
    if(!name || !phone ||!password ||!person){
      res.json({
        code: 0,
        message: '缺少必要参数'
      });
      return
    }
    try{
      const users = await User.insert({
        name,phone,password,person
      });
      res.json({
        code: 200,
        data: users
      })
    }catch(e){
      console.log(e)
      res.json({
        code: 0,
        message: '内部错误'
      })
    }
  },
  show: async function(req,res,next){
    // const users = await User.all();
    // console.log(1231231231232131231312)
    // res.json({
    //   code: 200,
    //   data: users
    // })
    try{
      let pageSize = req.query.pageSize || 10;
      // console.log(pageSize,123)
      let currentPage = req.query.currentPage || 1;
      // console.log(currentPage,123)
      let total = await User.all().count('id as total');
      // console.log(total,(currentPage - 1))
      let offset = (currentPage - 1) * pageSize;
      console.log(offset,Number(pageSize))
      let data = await User.knex().offset(offset).limit(pageSize).select()
      // console.log(data,12399)
      res.json({
        code: 200,
        data: {data, total}
      })
    }catch(e){
      console.log(e)
      res.json({
        code: 0,
        message: '内部错误'
      })
    }
  },
  edit: async function(req,res,next){
    try{
      const id = req.params.id;
      const users = await User.select({ id })
      console.log(123012301)
      res.json({
        code: 200,
        data: users
      })
    }catch(e){
      res.json({
        code: 0,
        message: '内部错误'
      })
    }
  },
  update: async function(req,res,next){
    let name = req.body.name;
    let phone = req.body.phone;
    let password = req.body.password;
    let id = req.params.id;
    let person = req.body.person;
    if(!id|| !name|| !password ||!phone ||!person){
      res.json({
        code: 0,
        message: '缺少必要参数'
      });
      return
    }
    try{
      const users = await User.update(id,{
        name,phone,password,person
      });
      res.json({
        code: 200,
        data: users
      })
    }catch(e){
      console.log(e)
      res.json({
        code: 0,
        message: '内部错误'
      })
    }
  },
  delete: async function(req,res,next){
    let id = req.params.id;
    if(!id){
      res.json({
        code: 0,
        data: 'params empty'
      })
      return
    }
    try{
      const users = await User.delete(id);
      console.log(users)
      res.json({
        code: 200,
        data: users
      })
    }catch(e){
      res.json({
        code: 0,
        message: '内部错误'
      })
    }
  },
  // pagination: async function(req,res,next) {
  //   try{
  //     let pageSize = req.query.pageSize || 20;
  //     let currentPage = req.query.currentPage || 1;
  //     let total = User.all().count('id as total');
  //     console.log(total,123)
  //     let offset = (currentPage - 1)* pageSize;
  //     let data = User.all().offset(offset).limit(pageSize)
  //     console.log(data,12399)
  //     res.json({
  //       code: 200,
  //       data: data
  //     })
  //   }catch(e){
  //     console.log(e)
  //     res.json({
  //       code: 0,
  //       message: '内部错误'
  //     })
  //   }
  // }
}
module.exports = userController;