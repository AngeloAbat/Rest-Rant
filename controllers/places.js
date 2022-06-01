const router = require('express').Router()
const places = require('../models/places')

router.get('/', (req,res) => {
    res.render('places/index', { places })
})

router.get('/new', (req, res) =>{
  res.render('places/new')
})

router.post('/', (req,res) =>{
  if(!req.body.pic){
    //Default Image
    req.body.pic = "http://placekitten.com/400/400"
  }
  if(!req.body.city){
    //Default Name
    req.body.city = "Unidentified"
  }
  if(!req.body.state){
    //Default State
    req.body.state = "Unidentified"
  }
  places.push(req.body)
  res.redirect('/places')
})

module.exports = router