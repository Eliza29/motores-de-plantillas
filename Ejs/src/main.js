const express = require('express')
const app = express();

const ProductosApi = require('../api/productos.js')
const productosApi = new ProductosApi()
const productos = productosApi.productos;

app.use(express.urlencoded({extended:true}));

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('pages/inicio')
})
app.get('/productos', (req, res) => {
    res.render('pages/lista', {productos})
})

app.post('/productos', (req, res)=>{
    productos.push(req.body);
    res.redirect('/productos');
})

const PORT = 8080;
app.listen(PORT, ()=> console.log(`Servidor iniciado en el puerto ${PORT}`));
