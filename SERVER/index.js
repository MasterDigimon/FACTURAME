import express from "express"
import mysql from "mysql2";


const app = express();

app.listen(8800, ()=>{
    console.log("Conectado a Backend")
});


const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"facturame"
});

app.get("/", (req, res)=>{
    res.json("Hello, this is the Backend")
});

app.get("/users", (req, res)=>{
    const q = "SELECT * FROM users"
    db.query(q, (err, data)=>{
            if(err) return res.json(err);
            return res.json(data) ;
    })
});

/*
app.post("/create", (req, res)=>{
    const username = req.body.user;
    const password = req.body.user;
    const email = req.body.user;
    const role = req.body.user;


    db.query('INSERT INTO users(username, password, email, role) VALUES (?,?,?,?)', [username, password, email, role],
        (err, result)=>{
            if(err){
                console.log(err);
            }else{
                res.send("Usuario registrado");
            }
        }
    )
});

*/