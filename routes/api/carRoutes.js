const router = require('express').Router();
const {
    carMake,
    carYear,
    carTrim, 
    carBodytype,
    carInfo
} = require('../../controllers/queries');

router.route('/:make').get(carMake);

router.route('/:make/:model').get(carYear);

router.route('/:make/:model/:year').get(carTrim);

router.route('/:make/:model/:year/:trim').get(carBodytype);

router.route('/:make/:model/:year/:trim/:bodytype').get(carInfo);


module.exports = router;