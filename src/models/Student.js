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
        const sql = `INSERT INTO ${this.tableName} SET ?`
        return Student.query(sql, body, (results) => results.insertId)
    }

    static async update(id, body){
        const sql = `UPDATE ${this.tableName} SET ? WHERE id = ${id}`
        await Student.query(sql, body, (results) => results)

        return Student.find(id)
    }

    static async destroy(id){
        const sql = `DELETE FROM ${this.tableName} WHERE id = ?`
        await Student.query(sql, id, (results) => results)
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