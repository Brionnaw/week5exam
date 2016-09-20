import express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let Movie = mongoose.model('Movie', {
  title: String,
  genre: String,
    dateDeleted:{
      type: Date,
      default: null
    }
});
// create static list of movies
let movies = [
   {id:1, title:"Star Wars", director:"Lucas" },
   {id:2, title:"The Martian", director:"Scott" },
   {id:3, title:"Ex Machina", director:"Garland" },
   {id:4, title:"Superman", director:"Donner" },
   {id:5, title:"Shrek", director:"Adamson" }

];
// unique movie id
let movieId = movies.length;

router.post('/movies', function(req, res) {

  let newMovie = new Movie (
      {
        title: req.body.title,
        genre: req.body.genre
    });
      newMovie.save((err, movies) => {    // Save Method
        if (err) {
          console.log(err);
          res.end()
        } else {
          console.log(movies);
          res.send('success')
        }
      })
});


/* GET /UPDATE movie by id */
router.get('/movies', function(req, res) {
 Movie.find({dateDeleted: null}).then((movies) => {
    res.send(movies)
  })
});

//edit

router.post('/movies/edit', function(req, res ) {
  Movie.findByIdAndUpdate(req.body.id, {$set: {title: req.body.title, genre: req.body.genre}}).then((err, movie) => {
        if (err) {
          console.log(err);
          res.end()
        } else {
          console.log(movie);
          res.send('success')
        }
      })
        });

        //Delete post
router.delete('/movies/delete/:id', function (req, res) {
  Movie.findByIdAndUpdate(req.params['id'], {$set: { dateDeleted: new Date ()}}).then((err,) =>{
    if (err) {
  console.log(err);
    } else {
  console.log(res);
    }
  })
  res.sendStatus(200);
});




export = router;
