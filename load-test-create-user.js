'use strict';

const faker = require('faker');
const loadTestUser = module.exports = {};

loadTestUser.create = (userContext, events, done) => {
  userContext.vars.username = faker.internet.userName() + Math.random();
  userContext.vars.email = faker.internet.email();
  userContext.vars.password = faker.internet.password() + Math.random();

  userContext.vars.name = faker.name.firstName() + Math.random();
  userContext.vars.description = faker.lorem.words(10);

  return done();
};
