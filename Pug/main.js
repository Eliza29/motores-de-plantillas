const express = require('express');
const app = express();

const ProductosApi = require('./api/productos.js')
const productosApi = new ProductosApi()
const productos = productosApi.productos;

app.use(express.urlencoded({extended:true}));
app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res)=>{
    res.render('inicio.pug')
})
app.get('/productos', (req, res) => {
    console.log(productos)
    res.render('lista.pug', {productos})
})

app.post('/productos', (req, res)=>{
    productos.push(req.body);
    res.redirect('/productos');
})

const PORT = 8080;
app.listen(PORT, ()=> console.log(`Servidor iniciado en el puerto ${PORT}`));