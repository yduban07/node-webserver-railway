import hbs from 'hbs';
import url from 'url';
import env from 'dotenv';
env.config();
import express from 'express';
const app = express();


const __fileName = url.fileURLToPath(import.meta.url);//C:\Users\Yasser Pichardo\Desktop\Node\06-webserver\
const __dirname =  url.fileURLToPath(new URL('.', import.meta.url));//C:\Users\Yasser Pichardo\Desktop\Node\06-webserver\app.js

// Handlebars
// Tenemos que crear un folder llamado 'views' si estamos utilizando la configuracion por defecto
// de handlebars, cuando le pidamos a este que renderice una vista, la va a buscar en la carpeta llamada 'view'
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estatico
app.use( express.static( 'public' ) );


// app.get('/',  (req, res) => {
//   __dirname, nos devuelve el path completo desde donde este instalado la app, donde este corriendo
//     res.sendFile(__dirname + 'public/generic.html');
//   });

app.get('/',  (req, res) => {
    res.render('home', {
      nombre: 'Maria Rosario',
      titulo: 'Curso de Node',
    });
  });

app.get('/generic',  (req, res) => {
    res.render('generic');
  });

  app.get('/elements',  (req, res) => {
    res.render('generic');
    });

app.get('*',  (req, res) => {
    res.sendFile(__dirname + 'public/404.html');
  });
//Cualquier otra que no este especificada antes va a lanzar un error

app.listen(process.env.PORT)