const express = require('express');
const app = express();
const port = 3002;

app.use(express.json());

const productos = [
  { id: 1, nombre: "Laptop", precio: 8000 },
  { id: 2, nombre: "Teclado", precio: 1000 },
  { id: 3, nombre: "Tablet", precio: 4000 }
];


app.get("/",(req,res)=>{
  res.send("Bienvenido a API ");
});

app.get('/api/productos/:id', (req, res) => {
  const id = Number(req.params.id);
  const producto = productos.find(producto => producto.id === id);

  if (!producto) {
    return res.status(404).json({ mensaje: "Producto no encontrado" });
  }

  res.json(producto);
});

app.get('/api/productos', (req, res) => {
  res.json(productos);
});


app.post('/api/productos', (req, res) => {
  const nuevoProducto = {
    id: productos.length + 1,
    nombre: req.body.nombre,
    precio: req.body.precio
  };
  productos.push(nuevoProducto);

  res.status(201).json({
    mensaje: "Producto creado exitosamente",
    datos: nuevoProducto
  });
});


app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});


/*
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bienvenido a PW2 desde el servidor Express");
});

app.get('/api/usuarios', (req, res) => {
  const usuarios = [
    { id: 1, nombre: "Ana", materia: "PW2" },
    { id: 2, nombre: "Carlos", materia: "PW2" }
  ];
  res.json(usuarios);
});


app.post('/api/usuarios', (req, res) => {
  const nuevoUsuario = req.body;
  
  res.status(201).json({
    mensaje: "Usuario creado exitosamente",
    datos: nuevoUsuario
  });
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
*/