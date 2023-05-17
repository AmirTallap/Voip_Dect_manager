const Device = require('../models/device');
const fs = require('fs');
const device_index = (req, res) => {
  Device.find().sort({ createdAt: -1 })
    .then(result => {
      res.render('index', { devices: result, title: 'All devices' });
    })
    .catch(err => {
      console.log(err);
    });
}

const device_details = (req, res) => {
  const id = req.params.id;
  Device.findById(id)
    .then(result => {
      res.render('details', { device: result, title: 'Device Details' });
    })
    .catch(err => {
      console.log(err);
      res.render('404', { title: 'Device not found' });
    });
}

const device_create_get = (req, res) => {
  res.render('create', { title: 'Create a new device' });
}

const device_create_post = async (req, res) => {
  const device = new Device(req.body);
  device.save()
    .then(result => {
      
      //Redirect
      if(res=="seed"){
        return;
      }
      res.redirect('/devices');
    })
    .catch(err => {
      console.log(err);
    });
}

const device_delete = async (req, res) => {
  const id = req.params.id;

  //Deleting the folder
  await Device.findById(id);

  //Delete mongoose doc
  await Device.findByIdAndDelete(id)
    .then(result => {
      res.json({ redirect: '/devices' });
    })
    .catch(err => {
      console.log(err);
    });
}

module.exports = {
  device_index, 
  device_details, 
  device_create_get, 
  device_create_post, 
  device_delete
}