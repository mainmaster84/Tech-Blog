const { Post } = require('../models');

const postData = [
  {
    title: 'Why MVC is so important',
    post_url: 'MVC allows developers to maintain a true seperation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.',
    user_id: 1
    
  },
  {
    title: 'Authentication vs Authorization',
    post_url: 'There is a difference between authentication and authorization. Authentication means confirming your own identity, whereas authorization means being allowed access to the system.',
    user_id: 1
  },
  {
    title: 'Object Relational Mapping',
    post_url: "I have really loved learning about ORMs. It's really simplified the way I make queries in SQL!",
    user_id: 2
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;