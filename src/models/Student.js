const db = require('../configs/database')

class Student {
    static tableName = "students"

    static all(){
        const sql = `SELECT * FROM ${this.tableName}`
        return Student.query(sql, null, (results) => results)
    }

    static find(id){
        const sql = `SELECT * FROM ${this.tableName} WHERE id = ?`
        return Student.query(sql, id, (results) => results)
    }

    static async create(body){
        const id = await new Promise((resolve, reject)=> {
            const sql = `INSERT INTO ${this.tableName} SET ?`
            db.query(sql, body, (err, result) => {
                resolve(result.insertId)
            })
        })
        return new Promise((resolve, reject)=> {
            const sql = `SELECT * FROM ${this.tableName} WHERE id = ?`
            db.query(sql, id, (err, results) => {
                resolve(results)
            })
        })
    }

    static async update(body){
        
    }

    static async destroy(body){
        
    }

    static query(sql, body, callback){
        return new Promise((resolve, reject)=> {
            db.query(sql, body, (err, results) =>{
                resolve(callback(results))
            })
        })
    }
}

module.exports = Student