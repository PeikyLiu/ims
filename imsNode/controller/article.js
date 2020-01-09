const Article = require('./../models/article.js');
const Class = require('./../models/class.js');
const { formatTime } = require('./../utils/date.js');
const articleController = {
  insert: async function(req,res,next){
    let name = req.body.name;
    let content = req.body.content;
    let class_id = req.body.classId;
    let time = formatTime(new Date());
    if(!name || !content || !class_id ||!time){
      res.json({
        code: 0,
        message: '缺少必要参数'
      })
      return
    }
    try{
      const articles = await Article.insert({
        name,content,class_id,time
      })
      res.json({
        code: 200,
        data: articles
      })
    }catch(e){
      console.log(e)
      res.json({
        code: 0,
        message: '内部错误'
      })
    }
  },
  update: async function(req,res,next){
    let id = req.params.id;
    let name = req.body.name;
    let content = req.body.content;
    let class_id = req.body.classId;
    if(!id || !name || !content || !class_id){
      res.json({
        code: 0,
        message: '缺少必要参数'
      })
      return
    }
    try{
      const articles = await Article.update(id,{
        name,content,class_id
      })
      res.json({
        code: 200,
        data: articles
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
        message : 'params empty'
      })
      return
    }
    try{
      const articles = await Article.delete(id);
      res.json({
        code: 200,
        data: articles
      })
    }catch(e){
      res.json({
        code: 0,
        message: '内部错误'
      })
    }
  },
  show: async function(req,res,next){
    try{
      let currentPage = req.query.currentPage || 1;
      let pageSize = req.query.pageSize || 10;
      let total = await Article.all().count('id as total');
      let offset = (currentPage - 1) * pageSize;
      let data = await Article.joinClass().offset(offset).limit(pageSize);
      res.json({
        code: 200,
        data:{ data, total }
      })
    }catch(e){
      console.log(e)
      res.json({
        code: 0,
        message: '内部错误'
      })
    }
    // const articles = await Article.joinClass();
    // res.json({
    //   code: 200,
    //   data: articles
    // })
  },
  home: async function(req,res,next){
    try {
      const articles = await Article.joinClass();
      console.log(articles,123)
      res.json({
        code: 200,
        data: articles
      })
    }catch(e){
      console.log(e)
      res.json({
        code: 0,
        message: '内部错误'
      })
    }
  },
  indexShow: async function(req,res,next){
    try{
      const id = req.params.id;
      console.log(id)
      const articles = await Article.joinClass({'article.id':id}).select();
      console.log(articles)
      res.json({
        code: 200,
        data: articles
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
      const classis = await Class.all();
      const id = req.params.id;
      console.log(id)
      const articles = await Article.select({ id })
      console.log(articles,1235666)
      res.json({
        code: 200,
        data: {classis, articles}
      })
    }catch(e){
      res.json({
        code: 0,
        message: '内部错误'
      })
    }
  }
}
module.exports = articleController;