const { Router } = require('express');
const router = Router();

const pelis = require('./sample.json');
console.log(pelis);
router.get('/', (req, res) => {
  res.json(pelis);
});

router.post('/', (req, res) => {
  const { nombre, apellido } = req.body;
  const id = pelis.length;

  //   res.json({ nombre, apellido });
  if (nombre && apellido) {
    const newObj = { ...req.body, id };
    // res.send('exito');
    console.log(newObj);
    pelis.push(newObj);
    res.json(pelis);
  } else {
    res.send('problema bro');
  }
});

module.exports = router;
