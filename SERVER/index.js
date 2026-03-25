import express from "express"
import mysql from "mysql2";
import cors from "cors";


const app = express();

app.use(cors());


const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"facturame"
});

app.get("/", (req, res)=>{
    res.json("Hello, this is the Backend")
});

app.get("/DashboardContador", (req, res) => {
    const contador = req.query.contador;
    let sqlPendientes = "SELECT id_invoices, amount, date FROM invoices WHERE status = 0 AND id_accountant = ?"
    let sqlCompletadas = "SELECT id_invoices, amount, date FROM invoices WHERE status = 1 AND id_accountant = ?"

    db.query(sqlPendientes, [contador], (err, pendientes) => {
        if (err) return res.json(err);
    
        db.query(sqlCompletadas, [contador], (err, completadas) => {
            if (err) return res.json(err);


            res.json({
                pendientes: pendientes,
                completadas: completadas
            });
        });
    });
});

app.get("/users", (req, res)=>{
    const q = "SELECT * FROM users"
    db.query(q, (err, data)=>{
            if(err) return res.json(err);
            return res.json(data) ;
    })
});

app.listen(8800, ()=>{
    console.log("Conectado a Backend")
});

