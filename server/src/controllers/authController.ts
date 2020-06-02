import express from 'express';
import User from '../models/user';

const router = express.Router();

router.post('/register', async (req, res) => {
  const { email, username } = req.body;

  try {
    if (await User.findOne({ email }))
      return res.status(400).send({ error: 'Email already exist' })
    
    if (await User.findOne({ username }))
      return res.status(400).send({ error: 'Username already exist' })
      
    const user = await User.create(req.body);

    user.password = undefined; 

    return res.send({ user });
  } catch (e) {
    return res.status(400).send({ error: 'Registration failed' })
  } 
});

module.exports = app => app.use('/auth', router);