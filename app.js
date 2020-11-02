// PASO 1: Crear una constante llamada express y requerir el modulo express

// PASO 2: Ejecución de Express
// Recorda que express es una funcion... hay que invocarla y guardalo en una constante llamada app

// PASO 3: Informacion que vamos a usar
// Crea una variable (por ej. heroes) y asignale como valor el contenido del archivo "heroes.json"
// Tip: podes usar el require como si fuera un modulo ;)

// PASO 4: Configurando el servidor
// Crea una constante llamada PORT y asignale como valor el numero tres mil
// ...

// Reemplaza los guiones por la constante para que utilice ese numero de puerto
// Sabes por que lo definimos como constante y no como variable ? 
var express = require('express')
var app = express()

app.listen(3030, () => console.log(`Server running in ${3030} port`));

// CONSIGNA 1
// Ruta Raíz / Home
app.get('/', function (req,res){

  res.send("Ni Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las y los Héroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!")

})

// CONSIGNA 2
// Ruta /heroes
// Consigna: enviar todo el array
let fs = require('fs');

app.get("/heroes"  , function (req,res){ 
    
  res.send(fs.readFileSync('heroes.json', 'utf-8'))
});

// CONSIGNA 3
// Aqui creas la ruta para devolver la pagina de los creditos
// Podes resolverlo en base a los ejemplos anteriores.
// Consigna: enviar todo el array
app.get("/creditos"  , function (req,res){ 
    
  res.send("Change may not always bring growth, but there is no growth without change.");
});


// Ruta... ¿Pára qué sirve esto?
app.get('*', (req, res) => {
  res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});
