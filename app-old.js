
import http from 'http';

http.createServer( (req, res) => {

    // res.writeHead(200, { 'Content-type': 'application/json' });
    //le agrega al header, es decirle al navegador que va a ser un file que se va a descargar
    // res.setHeader('Content-Disposition', 'attachment; filename=lista-csv');
    // res.writeHead(200, { 'Content-type': 'application/csv' });


    // const persona = {
    //     id: 1,
    //     nombre: 'Jesus',
    // }
    // res.write(JSON.stringify(persona));
    res.write('Hola Mundo');
    res.end();


} ).listen( 8080 );

console.log('Escuchando el puerto', 8080);