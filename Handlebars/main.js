const express = require('express');
const handlebars = require('express-handlebars');
const app = express();

const ProductosApi = require('./api/productos.js')
const productosApi = new ProductosApi()
const productos = productosApi.productos;

app.use(express.urlencoded({extended:true}));

app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        defaultLayout: 'index.hbs',
        layoutsDir: __dirname + '/views/layouts',
        partialsDir: __dirname + '/views/partials'
    })
)

app.set('view engine', 'hbs')
app.set('views', './views')

app.get('/', (req, res) => {
    res.render('main')
})
app.get('/productos', (req, res) => {
  res.render('list', { suggestedChamps: productos, listExists: true })
})

app.post('/productos', (req, res)=>{
  productos.push(req.body);
  res.redirect('/productos');
})
const PORT = 8080;
app.listen(PORT, ()=> console.log(`Servidor iniciado en el puerto ${PORT}`));