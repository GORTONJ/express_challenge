const express = require('express');
const app = express();

app.use(express.json());

app.set('port', process.env.port || 8000)

const studentRouter = require('./routes/student')
const gradesRouter = require('./routes/grades')

app.use('/students', studentRouter)
app.use('/grades', gradesRouter)

app.get ('/', (req, res) => {
    res.send('Welcome to the app')
})

app.post('/grade', (req, res) => {
    console.log(req.body)
    console.log(req.body[0].studentId)
    console.log(req.body[0].newGrade)
    res.send(`Student ${req.body[0].studentId}'s new grade recorded as ${req.body[0].newGrade}`)
})

app.post('/register', (req, res) => {
    console.log(req.body)
    console.log(req.body[0].userName)
    res.send(`New user ${req.body[0].userName} and email ${req.body[0].email} recorded`)

})

app.listen(app.get('port'), () => console.log(`listening on port ${app.get('port')}`))

module.exports = app;

