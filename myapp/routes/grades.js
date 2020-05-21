const express = require('express')
const router = express.Router()
const fs = require('fs')

const students = JSON.parse(fs.readFileSync('grades.json'))

router.get('/', (req, res) => res.send(students))

router.get('/:studentId', (req, res) => {
    const selectedStudent = students.find(student => student.studentId === Number(req.params.studentId))
    res.send(selectedStudent)
})

router.post('/grades', (req, res) => {
    console.log(req.body)
    res.send(req.body.newGrade)
    req.status(200).send('new grade added')
})

module.exports = router;
