const mongoose = require("mongoose");
const express = require("express");
const morgan = require('morgan');
const cors = require('cors');
const PORT = 5000;
const app = express();
 
const {MONGO_URL} = require('./config');
mongoose.connect(MONGO_URL,{useNewUrlParser: true, useUnifiedTopology: true});

app.set('port', PORT);
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/api',require('./routes/local.js'));

app.listen(app.get('port'),()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
