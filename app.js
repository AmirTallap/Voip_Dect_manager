const cron = require("node-cron");
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
const deviceRoutes = require('./routes/deviceRoutes');
// express app
const app = express();
const net = require('net');
const client = net.connect({port: 80, host:"google.com"}, () => {
  global.current_ip_address=client.localAddress;
});


// connect to mongodb & listen for requests
const dbURI = 'mongodb://127.0.0.1/dect_voip_station';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(3000))
  .catch(err => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// routes
app.get('/', (req, res) => {
  res.redirect('/devices');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// device routes
app.use('/devices', deviceRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});