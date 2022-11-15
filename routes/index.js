let router = require('express').Router();


let user = require('./user')
router.use('/user', user)

let city = require('./city')
router.use('/city', city)

let cityId = require('./cityId')
router.use('/cities', cityId)

let itinerary = require('./itinerary')
router.use('/itineraries', itinerary)

let hotel = require('./hotel')
router.use('/hotel', hotel)

let hotelId = require('./hotelId')
router.use('/hotels', hotelId)

let show = require('./show')
router.use('/shows', show)
module.exports = router;
