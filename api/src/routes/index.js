const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getAllCountries = require('./getAllCountries')
const getCountry = require('./getIdCountries')
const postActivities = require('./postActivities')
const getActivity = require('./getActivities')
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/', getAllCountries);
router.use('/country',getCountry)
router.use('/activities',postActivities)
router.use('/activity', getActivity)


module.exports = router;
