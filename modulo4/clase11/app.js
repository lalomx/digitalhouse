const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public')); // por default /


app.get('/', (req,res)=>{
  console.log("sin recargar");
  res.sendFile(__dirname + '/views/home.html');
  //res.send("hola")
});


app.listen(3000, ()=>{
  console.log('Servidor funcionando');
});
// /
// /static

// ../img/gato.png
// ./css/styles.css