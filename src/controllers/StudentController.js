const Student = require('./../models/Student')

class StudentController{
    async index(req, res){
        const students = await Student.all()
        const data = {
            message: 'All Students',
            data : students
        }
        res.json(data)
    }

    async show(req, res){
        const students = await Student.find(req.params.id)
        const data = {
            message: 'Detail Students',
            data : students
        }
        res.json(data)
    }

    async store(req, res){
        const students = await Student.create(req.body)
        const data = {
            message: 'Store Students',
            data : students
        }
        res.json(data)
    }

    async update(req, res){

    }

    async destroy(req, res){

    }

}

const controller = new StudentController
module.exports = controller