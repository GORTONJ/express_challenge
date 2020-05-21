const express = require('express')
const router = express.Router()
const fs = require('fs')

const students = JSON.parse(fs.readFileSync('students.json'))

router.get('/', (req, res) => {
   if(req.query.studentName) {
    console.log(req.query.studentName)
    const searchResults = students.filter(student => student.studentName === req.query.studentName)
    res.send(searchResults)
   } 
   else {
    res.send(students)   
   }
})

router.get('/:studentId', (req, res) => {
    console.log(req.params.studentId)
    const selectedStudent = students.find(student => student.studentId === Number(req.params.studentId))
    res.send(selectedStudent)
})

module.exports = router;
