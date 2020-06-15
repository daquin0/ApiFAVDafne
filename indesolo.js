const express=require("express");
const bodyparser=require("body-parser");
const cors=require("cors");
const app=express(); 

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.listen(3005,()=>{
    console.log("Escuchando en el puerto 3000"); 
});

app.get("/",cors(),(req,res)=>{
    res.status(200).send({message:"Bienvenivo ya estamos respondiendo"})
});


