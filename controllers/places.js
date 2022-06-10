const router = require('express').Router()
const places = require('../models/places')

// Places Area
router.get('/', (req,res) => {
    res.render('places/index', { places })
})

// Individual Place
router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)||!places[id]){
    res.render('404')
  } else{
    res.render('places/show', {place: places[id], id})
  }
})

// Edit Place
router.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id)
  if(isNaN(id) || !places[id]){
    res.render('404')
  } else{
    res.render('places/edit', {place: places[id], id})
  }
})

router.put('/:id', (req, res) =>{
  let id = Number(req.params.id)
  if(isNaN(id) || !places[id]){
    res.render(`404`)
  } else{
    if(!req.body.pic){
      req.body.pic = "http://placekitten.com/400/400"
    }
    if(!req.body.city){
      req.body.city = `Undefined`
    }
    if(!req.body.state){
      req.body.state = `Somewhere in the US`
    }
    places[id] = req.body
    res.redirect(`/places/${id}`)
  }
})

// Delete Place
router.delete(`/:id`, (req,res) => {
  let id = Number(req.params.id)
  if (isNaN(id)||!places[id]){
    res.render('404')
  } else{
    places.splice(id, 1)
    res.redirect(`/places`)
  }
})

// Add New Place
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
    req.body.state = "Somewhere in the US"
  }
  places.push(req.body)
  res.redirect('/places')
})


// Exporting router
module.exports = router