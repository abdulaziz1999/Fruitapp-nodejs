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
        if(students.length > 0){
            const data = {
                message: 'Detail Students',
                data : students
            }
            res.json(data)
        }else{
            const data = {
                message: 'Students data doesn`t exist'
            }
            res.status(404).json(data)
        }
    }

    async store(req, res){
        const studentsId = await Student.create(req.body)
        const students = await Student.find(studentsId)
        
        const data = {
            message: 'Store Students',
            data : students
        }
        res.json(data)
    }

    async update(req, res){
        const { id } = req.params;
        const student = await Student.find(id)

        if(student.length > 0){
            const update = await Student.update(id, req.body)

            const data = {
                message: 'Update Students',
                data : update
            }
            res.json(data)
        }else{
            const data = {
                message: 'Students data doesn`t exist'
            }
            res.status(404).json(data)
        }
    }

    async destroy(req, res){
        const students = await Student.find(req.params.id)
        if(students.length > 0){
            await Student.destroy(req.params.id)
            const data = {
                message: 'Detele Students Success'
            }
            res.json(data)
        }else{
            const data = {
                message: 'Students data doesn`t exist'
            }
            res.status(404).json(data)
        }
    }

}

const controller = new StudentController
module.exports = controller