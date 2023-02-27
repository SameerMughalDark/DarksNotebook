const express = require('express');
const User = require('../models/User')
const router = express.Router();
const { body, validationResult } = require('express-validator');



router.post('/', [body('email','Sorry Invalid Email').isEmail(),
body('password','Sorry Password Must be greater than 4 characters').isLength({ min: 5 }),

], (req, res) => {
  // console.log(req.body);
  // const user = User(req.body);
  // user.save();
  // res.json(req.body)
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  }).then(user => res.json(user)).catch(err=>{console.log('error'+err); res.json({error:'Email is already in use try another email'})})
  // res.send(req.body);
})

module.exports = router;