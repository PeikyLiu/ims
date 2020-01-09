const knex = require('./knex');

class Base {
  constructor(props) {
    this.table = props;
  }

  all(){
    console.log(123,12313123123123113132)
    return knex(this.table).select()
  }

  knex(){
    return knex(this.table)
  }
 
  select(params) {
    return knex(this.table).select().where(params)
  }

  insert(params){
    return knex(this.table).insert( params )
  }

  update(id, params ){
    return knex(this.table).where('id', '=', id).update( params )
  }

  delete(id){
    return knex(this.table).where('id', '=', id).del()
  }
  offset(){
    return knex(this.table).select('*').from(this.table).offset(20)
  }
}

module.exports = Base;