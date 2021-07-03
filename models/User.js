//destructure Model and DataTypes from sequelize package
const {Model, DataTypes} = require('sequelize');
//se up authentication
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');