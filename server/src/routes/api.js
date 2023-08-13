const express = require('express');

const planetsRouter = require('./planets/planets.router');
const launchesRouter = require('./launches/launches.router');
const companyRouter = require('./company/company.router');

const api = express.Router();

api.use('/planets', planetsRouter);
api.use('/launches', launchesRouter);
api.use('/company', companyRouter);

module.exports = api;