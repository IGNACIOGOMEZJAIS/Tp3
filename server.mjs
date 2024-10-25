import express from 'express';

const app = express();
const port = 3000;

app.get('/profile',(req,res)=>{
    const edad = req.query.edad;
    console.log(`Edad recibida : ${edad}`);
    res.send(`Edad del perfil ${edad}`);
    });
    app.listen(port,()=>{

        console.log(`Servidor corriendo en el puerto ${port}`);
    })
    