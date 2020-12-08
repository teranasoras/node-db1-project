const express = require("express");

const server = express();


const budgetrouter = require('./budgets/budget-router')

server.use(express.json());

server.use('/', budgetrouter)

module.exports = server;
