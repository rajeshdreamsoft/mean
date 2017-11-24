// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

var jwt    = require('jsonwebtoken');
// Get our API routes
const api = require('./server/routes/api');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());

var distDir = __dirname + "/src/";
app.use(express.static(distDir));

app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

const router = express.Router();
router.use(function(req, res, next) {
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
  app.use('/api', router);

// Set our api routes
app.use('/api', api);


app.post('/authenticate', function(req, res) {
  const payload={admin:'rajesh'};
   var token = jwt.sign(payload, 'rajesh');

   // return the information including token as JSON
   res.json({
     success: true,
     message: 'Enjoy your token!',
     token: token
   });

   });
// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
