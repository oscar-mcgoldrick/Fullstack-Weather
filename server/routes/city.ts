import express from 'express'
import request from 'superagent'

import path from 'path'
import dotenv from 'dotenv'
const envPath = path.join(__dirname, '../../.env')
dotenv.config({ path: envPath })

const router = express.Router()

router.post('/', (req, res) => {
  console.log(req.body)
  request.get(`https://api.api-ninjas.com/v1/city?name=${req.body['cityName']}`).set('X-Api-Key', `${process.env.CITY_KEY}`)
  .then(response => {
    return res.json(response.body)})
})

export default router
