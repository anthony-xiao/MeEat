const express = require('express')
const db = require('../db/db')

const router = express.Router()
router.use(express.json())

router.get('/RestaurantsList', (req, res) => {
  db.allRest()
    .then(rest => {
      res.json({rest})
    })
    .catch(err => {
      res.status(500).send('unable to reach databse')
      // eslint-disable-next-line no-console
      console.error(err)
    })
})

router.post('/', (req, res) => {
  const rest = req.body
  console.log(rest)
  db.newRest(rest)
    .then(() => {
      res.status(200).end()
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
      res.status(500).send('Unable to read from database')
    })
})

module.exports = router
