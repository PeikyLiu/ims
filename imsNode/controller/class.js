const Class = require('./../models/class.js');
const classController = {
  insert: async function(req,res,next){
    let name = req.body.name;
    if(!name){
      res.json({
        code: 0,
        message: '缺少必要参数'
      })
      return
    }
    try{
      const classies = await Class.insert({
        name
      });
      res.json({
        code: 200,
        data: classies
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
    try{
     const classies = await Class.all();
     console.log(classies)
      res.json({
        code: 200,
        data: classies
      }) 
    }catch(e){
      res.json({
        code: 0,
        message: '内部错误'
      })
    }  
  },
  edit: async function(req,res,next){
    try{
      const id = req.params.id;
      const classies = await Class.select({ id })
      res.json({
        code: 200,
        data: classies
      })
    }catch(e){
      res.json({
        code: 0,
        message: '内部错误'
      })
    }
  },
  update: async function(req,res,next){
    let id = req.params.id;
    let name = req.body.name;
    console.log(id,name)
    if(!id||!name){
      res.json({
        code: 0,
        message: '缺少必要参数'
      })
      return
    }
    try{
      const classies = await Class.update(id,{
        name
      });
      res.json({
        code: 200,
        data: classies
      })
    }catch(e){
      console.log(e)
      res.json({
        code: 0,
        message : '内部错误'
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
      const classies = await Class.delete(id);
      res.json({
        code: 200,
        data: classies
      })
    }catch(e){
      console.log(e)
      res.json({
        code: 0,
        message: '内部错误'
      })
    }
  }
}
module.exports = classController;