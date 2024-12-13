const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const db = require('./config/dbConnect')
const ownersRouter = require('./routes/ownersRouter')
const usersRouter = require('./routes/usersRouter')
const productsRouter = require('./routes/productsRouter')

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use('/owners', ownersRouter)
app.use('/users', usersRouter)
app.use('/products', productsRouter)



app.listen(3000)