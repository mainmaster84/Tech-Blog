  
const { User } = require('../models');

const userData = [
  {
    username: 'Xandromus',
    password: 'password123'
    
  },
  {
    username: 'Lernatino',
    password: 'password123'
  },
  {
    username: 'Mainmaster',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;