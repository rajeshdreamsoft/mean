const express = require('express');

var sql = require('mssql'); // MS Sql Server client

// Connection string parameters.
var sqlConfig = {
    user: 'tl_02',
    password: 'tl2@123',
    server: '10.0.1.149',
    database: 'JNCloud_DevV4'
}


const router = express.Router();
/*
router.use(function(req, res, next) {
console.log('Hi auth')
    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    // decode token
    if (token) {
      // verifies secret and checks exp
      jwt.verify(token, 'rajesh', function(err, decoded) {
        if (err) {
          return res.json({ success: false, message: 'Failed to authenticate token.' });
        } else {
          // if everything is good, save to request for use in other routes
          req.decoded = decoded;
          next();
        }
      });
    } else {
   return res.status(403).send({
          success: false,
          message: 'No token provided.'
      });
    }
  });
*/
/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works good');
});
router.get('/test', (req, res) => {
  res.send('api works good');
});

//var jwt = require('express-jwt');
var jwt = require('jsonwebtoken');
var rsaValidation = require('auth0-api-jwt-rsa-validation');


router.post('/users', (req, res) => {

  sql.connect(sqlConfig, function() {
    var request = new sql.Request();
    request.query('select * from [dbo].[Users]', function(err, recordset) {
      sql.close();
        if(err)
        {console.log(err);}
        res.end(JSON.stringify(recordset)); // Result in JSON format
    });

});
});
router.post('/authenticate', function(req, res) {
 const payload={admin:'rajesh'};
  var token = jwt.sign(payload, 'rajesh');

  // return the information including token as JSON
  res.json({
    success: true,
    message: 'Enjoy your token!',
    token: token
  });

  });

module.exports = router;
