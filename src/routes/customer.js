const router = require('express').Router();

const Controller = require('../controllers/customerController');

router.get('/', Controller.list);
router.post('/add', Controller.save);
router.get('/update/:id', Controller.edit);
router.post('/update/:id', Controller.update);
router.get('/delete/:id', Controller.delete);
router.get('/listo/:id', Controller.listo);

module.exports = router;