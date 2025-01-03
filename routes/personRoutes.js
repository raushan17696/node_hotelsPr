const express=require('express');
const router =express.Router();
const Person =require('./../models/person');
//post route to add a person
router.post('/', async (req, res) => {
    try {
      const data = req.body;
      const newPerson = new Person(data);
      const response = await newPerson.save();
      console.log('Person data saved');
      res.status(200).json(response);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  module.exports=router;