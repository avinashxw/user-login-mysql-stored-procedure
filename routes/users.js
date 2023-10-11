var express = require('express');
var router = express.Router();
var path = require('path');
const https = require('https');

var db = require('/home/ubuntu/avinashxw/userloginapi/user-login-mysql-stored-procedure/routes/db/getData');

var jwt = require('jsonwebtoken');
const fs = require('fs')
var multer	=	require('multer');
const bodyParser = require('body-parser')
/* var fetch =  require('node-fetch'); */

router.use(bodyParser.urlencoded({ extended: false }))

router.use(bodyParser.json())
router.use(bodyParser.text())

router.use(express.json());
router.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
