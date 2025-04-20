require('dotenv').config(); 

const express = require('express');
const mysql = require('mysql2');
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json());
// connekt mysql
const db = mysql.createConnection({
  host: process.env.DB_HOSTMe,
  user: process.env.DB_USERMe,
  password: process.env.DB_PASSWORDMe,
  database: process.env.DB_NAMEMe,
});
db.connect(err =>{
  if(err) throw err;
  console.log('mysql connected');
});

// get all students from db
app.get('/students',(req, res)=>{
  db.query('SELECT * FROM students',(err, results)=>{
    if(err) throw err;
    res.json(results)
  })
})

// add new stu
app.post('/students',(req, res)=>{
  const{name, grade, avatar} = req.body;
  db.Queery('INSERT INTO students(name, grade, avatar) VALUES(?,?,?)',[name, grade, avatar],
    (err)=>{
      if(err) throw err
      res.json({message: 'student added'});
    } );
});

// Start server
app.listen(3000, () => console.log('Server running on http://localhost:3000'));









