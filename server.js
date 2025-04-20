require('dotenv').config(); 

const express = require('express');
const mysql = require('mysql2');
const cors = require('cors')
const app = express();

app.use(cors);
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











