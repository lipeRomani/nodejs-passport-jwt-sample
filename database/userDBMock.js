const _ = require('lodash');

const users = [
  {
    id: 1,
    name: 'tony_stark',
    password: '123456'
  },
  {
    id: 2,
    name: 'spider_man',
    password: '123456'
  }
];

module.exports.findById = (id, password = false) => {
  const user = users[_.findIndex(users, { id: id })];
  
  if (!password && user) {
    delete user.password;
  }

  return new Promise((resolve, reject) => {
    user ? resolve(user) : resolve(null);
  });
};

module.exports.findByName = (name, password = false) => {
  const user = users[_.findIndex(users, { name: name })];

  if (!password && user) {
    delete user.password;
  }

  return new Promise((resolve, reject) => {
    user ? resolve(user) : resolve(null);
  });
};

module.exports.findAll = () => {
  return new Promise((resolve, reject) => {
    const mapUsers = users.map(user => {
      return {
        id: user.id,
        name: user.name
      };
    });
    resolve(mapUsers);
  });
};
