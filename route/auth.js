const router = require('express').Router();
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/keys');
const UserDB = require('../database/userDBMock');

router.post('/login', (req, res) => {
  const { name, password } = req.body;
  UserDB.findByName(name, true).then(user => {
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: 'Password not match' });
    }

    const token = jwt.sign({ id: user.id }, jwtSecret);
    return res.status(200).json({ message: 'ok', token });
  });
});

module.exports = router;
