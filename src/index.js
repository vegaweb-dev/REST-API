const express = require('express');
const app = express();
const morgan = require('morgan');

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('combined'));
app.use(express.json()); //verificar si el json lleva parentesis*************************************
app.use(express.urlencoded({ extended: false }));

//routes
app.use(require('./routes/index.js'));
app.use('/api/contenido', require('./routes/contenido.js'));
app.use('/api/pelis', require('./routes/contenido.js'));

//listening starting the server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
