const express = require('express');
require('./security/passport');
const app = express();
const passport = require('passport');
const bodyParser = require('body-parser');

const authRoutes = require('./route/auth');
const userRoutes = require('./route/user');

app.use(passport.initialize());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

//Routes
app.use('/auth', authRoutes);
app.use('/user', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listen on Port ${PORT}`));