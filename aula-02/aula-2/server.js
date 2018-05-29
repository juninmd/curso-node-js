require('dotenv').config({path: '.env'})
const express = require("express");
const nodemailer = require("nodemailer");
const mysql = require("mysql");
const app = express();

app.get('/clientes', (req, res, next) => {
    const con = mysql.createConnection({
        host: "us-cdbr-iron-east-04.cleardb.net",
        user: "b69bb5c6b22934",
        password: "6946d5ac"
    });
    
    con.connect((err)=>{
        if(err){
            console.log("Erro ao conectar ao banco", err);
            return res.status(500).send({erro: 'xiii, deu zika'});
        }
    
        console.log("Conectou no banco :)");
    
        con.query("select * from heroku_e06300498be1591.cliente",function(err, results){
            if(err){
                console.log("Erro ao consultar no banco", err);
                return res.status(500).send({erro: 'xiii, deu zika'});
            }
    
            return res.status(200).send(results);
        })
    }); 
})

app.listen(5000,function(){
    console.log("Api rodando na porta 5000");
});

function disparaEmail(){
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: false,
        auth: {
            user: 'guilherme.estteves@gmail.com', // generated ethereal user
            pass:  process.env.MINHA_SENHA // generated ethereal password
        }
    });

    console.log(process.env.MINHA_SENHA_NOVA);

    let mailOptions = {
        from: '"Esteves 👻" <guilherme.estteves@gmail.com>', // sender address
        to: 'guilherme.esteves@luizalabs.com', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world?'+ process.env.MINHA_SENHA_NOVA, // plain text body
        html: '<b>Hello world?</b>' // html body
    };

    console.log("Enviando email...");
    
    transporter.sendMail(mailOptions,function(erro,info) {
        if(erro){
           console.log("Acorreu um erro", erro);
           return;
        }

        console.log("Email enviado!");
    });
}
console.log("Aqui fora.");