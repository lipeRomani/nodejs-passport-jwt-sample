const router = require('express').Router();
const passport = require('passport');
const UserDB = require('../database/userDBMock');

const passportLogin = passport.authenticate('jwt', { session: false });

router.get('/', passportLogin, (req, res) => {
  UserDB.findAll().then(
    users => (users ? res.status(200).json(users) : res.status(200).json([]))
  );
});

router.get('/:id/show', passportLogin, (req, res) => {
  const id = Number.parseInt(req.params.id);
  UserDB.findById(id).then(user => {
    return user ? res.status(200).json(user) : res.status(400).json({});
  });
});

module.exports = router;
