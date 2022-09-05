const router = require('express').Router()
const db = require('../models')

//Heroku Deployment


router.get('/', (req, res) => {
  db.Place.find()
  .then((places) => {
    res.render('places/index', {places})
  })
  .catch(err => {
    console.log(err)
    res.render('404')
  })
})

router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(() => {
    res.redirect(`/places`)
  })
  .catch(err => {
    if(err && err.name == 'ValidationError'){
      let message = `Validation Error`
      for (var field in err.errors){
        message += `${field} was ${err.errors[field].value}.`
        message += `${err.errors[field].message}`
      }
      res.render(`places/new`, { message })
    }
    else{
      res.render(`404`)
    }
  })
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .populate('comments')
  .then(place => {
    res.render(`places/show`, {place})
  })
  .catch(err => {
    console.log(`err`, err)
    res.render(`404`)
  })
})

router.put('/:id', (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id, req.body)
  .then(() => {
      res.redirect(`/places/${req.params.id}`)
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})


router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
  .then(place => {
    res.redirect(`/places`)
  })
  .catch(err => {
    res.render('404')
  })
})


router.get('/:id/edit', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
    res.render('places/edit', { place })
  })
  .catch(err => {
    res.render('error404')
  })
})

router.post('/:id/comments', (req, res) => {
  console.log(req.body)
  console.log("This is the current rant = " + req.body.rant)
  if(req.body.rant == "on"){
    req.body.rant = true
  } else{
    req.body.rant = false
  }
  console.log("Updated rant: " + req.body.rant)
  db.Place.findById(req.params.id)
  .then(place => {
    db.Comment.create(req.body)
    .then((comment) => {
      place.comments.push(comment.id)
      place.save()
      .then(() => {
        res.redirect(`/places/${req.params.id}`)
      })
    })
    .catch(err =>{
      console.log(err)
      res.send(`404`)
      })
    })
    .catch(err => {
      res.render(`404`)
    })
  })



router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router
