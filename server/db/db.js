const path = require('path')
const config = require(path.join(__dirname, '../../knexfile')).development
const knex = require('knex')(config)

module.exports = {
  allRest,
  getRest,
  newRest,
  editRest,
  deleteRest
}

function allRest () {
  const db = knex
  return db('restaurants').select()
}

function getRest (id) {
  const db = knex
  return db('restaurants')
    .where('id', id).select()
}

function newRest (rest) {
  const db = knex
  return db('restaurants').insert(rest)
}

function editRest (rest) {
  const db = knex
  return db('restaurants')
    .where('id', rest.id).update(rest)
}

function deleteRest (id) {
  const db = knex
  return db('restaurants')
    .where('id', id).del()
}
