/*
    Rutas de Eventos / Events
    host + /api/events
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/eventsControllers');
const { isDate } = require('../helpers/isDate');
const { fieldValidator } = require('../middlewares/fieldValidator');
const { jwtValidator } = require('../middlewares/jwtValidator');

const router = Router();

// Valida el token para todas las peticiones
router.use( jwtValidator );

router.get( '/', getEvents );

router.post( '/', [
  check('title', 'El título es obligatorio').not().isEmpty(),
  check('start', 'La fecha de inicio es obligatoria').custom( isDate ),
  check('end', 'La fecha de finalización es obligatoria').custom( isDate ),
  fieldValidator
], createEvent );

router.put( '/:id', updateEvent );

router.delete( '/:id', deleteEvent );


module.exports = router;