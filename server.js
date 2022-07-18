const express = require('express');
const inquirer = require('inquirer');
const db = require('./db/connection');

// Start server after DB connection
db.connect(err => {
  if (err) throw err;
  console.log('=================');
  console.log('Employee Tracker');
  console.log('=================');

});