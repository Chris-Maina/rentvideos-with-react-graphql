require('dotenv').load();
const express = require('express');
const mongoose = require('mongoose');
const graphqlHTTP = require('express-graphql');
const bodyParser = require('body-parser');

const schema = require('./schema');

const app = express();

/**
 * Middlewares
 * 
 * parse application/x-www-form-urlencoded
 * parse application/json
 */
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

/**
 * Config
 */
if (!process.env.MONGO_URI) throw new Error('You must provide a Mongo URI');
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.dev.config');
app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;
