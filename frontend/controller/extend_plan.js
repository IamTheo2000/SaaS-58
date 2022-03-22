const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const sequelize = require('../util/database');

var initModels = require("../models/init-models");
var models = initModels(sequelize);

module.exports = (req, res, next) => {
    const username = String(req.body.email);
    const password = String(req.body.password);

    //if username and password are not given error
    if (!username || !password) return res.status(400).json({message: 'Some parameters are undefined'});

};