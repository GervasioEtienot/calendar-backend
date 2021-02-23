/*
    Rutas de Usuarios / Auth
    host + /api/auth
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { fieldValidator } = require('../middlewares/fieldValidator');
const { createUser, loginUser, revalidToken } = require('../controllers/auth');
const { jwtValidator } = require('../middlewares/jwtValidator');

const router = Router();



router.post(
  '/new',
  [
    check('name', 'El nombre de usuario es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe tener al menos 6 caracteres').isLength({ min: 6 }),
    fieldValidator
  ], 
  createUser );

router.post(
  '/',
  [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe tener al menos 6 caracteres').isLength({ min: 6 })
  ], 
  loginUser);

router.get('/renew', jwtValidator, revalidToken);


module.exports = router;