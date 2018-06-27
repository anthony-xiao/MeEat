const express = require('express')
const db = require('../db/db')

const router = express.Router()
router.use(express.json())

router.get('/', (req, res) => {
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

router.get('/:id', (req, res) => {
  const id = req.params.id
  db.getRest(id)
    .then(rest => {
      console.log(rest)
      res.json({rest})
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
      res.status(500).send('Unable to read from database')
    })
})

module.exports = router
