const express = require('express');
const app = express();
const port = 8081;
const knex = require('knex')(require('../knexfile.js'));

app.get('/', (req, res) => {
  res.send('Application up and running.')
})

app.listen(port, () => {
  console.log(`Pets listening on port ${port}`)
})

app.get('/pets', (req, res) => {
    knex('pet')
    .SELECT('*')
    .then(data => {
        let petNames = data.map(pet => pet.name)
    })
})