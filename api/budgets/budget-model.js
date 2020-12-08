
const db = require("../../data/dbConfig.js");

module.exports = {
getAll(){
    return db('accounts')
},
getById(id){
    return db('accounts').where({id}).first()
},
async create(budget) {
    const [id] = await db("accounts").insert(budget)
    return db('accounts').where({id}).first()
},
async update(id, changes) {
    const count = await db("accounts").where({id}).update(changes)
    if (count){
        return db("accounts").where({id}).first()
    }else{
        return Promise.resolve(null)
    }
},
async delete(id) {
    const item = await db("accounts").where({id}).first()
    if (!item) return Promise.resolve(null)
    await db("accounts").where({id}).del()
    return Promise.resolve(item)
}
}