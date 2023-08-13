const express = require('express');
const {
  httpGetInforCompany,
} = require('./company.controller');

const companyRouter = express.Router();

companyRouter.get('/', httpGetInforCompany);

module.exports = companyRouter;