const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:
// Query Params: request.query (Filtros, ordenação, paginação, ...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

// MongoDB (Não-relacional)

//app.get('/users', (request, response) => {
//app.put('/users/:id', (request, response) => {

app.use(cors());
app.use(express.json());
app.use(routes);

mongoose.connect('mongodb+srv://fernandojs8:omnistack@cluster0-inuh7.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

app.listen(3333);