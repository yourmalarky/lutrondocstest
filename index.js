var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.listen((process.env.PORT || 3000));

// Server frontpage
app.get('/', function (req, res) {
    res.send('This is TestBot Server');
});

// Facebook Webhook
app.get('/webhook/', function (req, res) {
  if (req.query['hub.verify_token'] === 'EAAD0BqWxcq8BAEElFZAcvMSKY0wGCCaXNQZBSd5u63KHJpQXV8EvZCF4pVG1ypJmGlCWe4hH5u6kZCHyYb5QSl4UcI3W1jfrrtKHP5SGHKzcEhS09QDboenP4uRl7WdvD2TN0JsK0Tx97CuiIObrAvB2GkvNcDUZBIOja6VNzkwZDZD') {
    res.send(req.query['hub.challenge']);
  }
  res.send('Error, wrong validation token');
})
