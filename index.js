const port = process.env.PORT || 3333;
const express = require('express');
const app     = express();
const path    = require('path');
const router  = express.Router();

router.get('/', function(req, res){
  res.sendFile(path.join(__dirname+'/dist/index.html'));
});

router.get('/about', function(req, res){
  res.sendFile(path.join(__dirname+'/dist/about.html'));
});

router.get('/work', function(req, res){
  res.sendFile(path.join(__dirname+'/dist/work.html'));
});

router.get('/contact', function(req, res){
  res.sendFile(path.join(__dirname+'/dist/contact.html'));
});

app.use('/css', express.static(__dirname+'/dist/css'));
app.use('/js', express.static(__dirname+'/dist/js'));
app.use('/img', express.static(__dirname+'/dist/img'));

app.use('/', router);
app.listen(port);

console.log(`App running at port ${port}`);