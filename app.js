'use strict'
require("dotenv").config();
const express = require('express');
const { productRoute, userRoute } = require('./src/routes');
const app = express();
const mongoose = require('./src/config/mongodb.service')
const cors = require('cors')
app.use(express.json());
app.use(cors({origin:'*'}))
app.use('/api/product',productRoute);
app.use('/api/user',userRoute);

// app.listen(8080);

module.exports =  app