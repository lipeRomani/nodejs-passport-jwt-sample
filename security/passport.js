const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const { jwtSecret } = require('../config/keys');
const UserDB = require('../database/userDBMock');

const strategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: jwtSecret
};

passport.use(
  new JwtStrategy(strategyOptions, (jwt_payload, done) => {
    const { id } = jwt_payload;
    UserDB.findById(id).then(user => {
      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    });
  })
);
