const { filterByQuery, findById, createNewAnimal, validateAnimal } = require('../../lib/animals');
const { animals } = require('../../data/animals.json');
const router = require('express').Router();


/////  get routes  /////
router.get("/animals", (req, res) => {
    let results = animals;
    if (req.query) {
      results = filterByQuery(req.query, results);
    }
    res.json(results);
  });
  
  router.get("/animals/:id", (req, res) => {
    const result = findById(req.params.id, animals);
    if (result) {
      res.json(result);
    } else {
      res.send(404);
    }
  });
  
  /////  post routes  /////
  router.post("/animals", (req, res) => {
    //req.body is where our incoming content will be
    //console.log(req.body);
    //set id based n what the next index of the array will be
    req.body.id = animals.length.toString();
  
    //if any data in req.body is incorrect, send 400 error back
    if (!validateAnimal(req.body)) {
      res.status(400).send("The animal is not properly formatted.");
    } else {
      const animal = createNewAnimal(req.body, animals);
      res.json(animal);
    }
  
    //add animal to json file and animals array in this function
    // const animal = createNewAnimal(req.body, animals);
  
    // res.json(animal);
  });


  module.exports = router;