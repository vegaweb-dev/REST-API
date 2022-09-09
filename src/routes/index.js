const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.json({ mensaje: 'esto es un json' });
});
router.get('/otraruta', (req, res) => {
  res.send('estoy mandando una cadena');
});
module.exports = router;
