import express, { Router } from 'express'
import * as db from '../db/cities'

const router = express.Router()

router.get('/', async (req, res, next) => {
  try{
    const cities = await db.getAllCities()
    res.json(cities)
  } catch (e) {
    next(e)
  }
})

router.get('/:id', async (req, res, next) => {
  try{
    const id = req.params.id
    const city = await db.getSingleCity(id)
    res.json(city)
  } catch (e) {
    next(e)
  }
})

router.post('/', async (req, res, next) => {
  try{ 
    const city = req.body
    const newCity = await db.addCity(city)
    res.json(newCity)
  } catch (e) {
    next(e)
  }
})

router.patch('/:id', async (req, res, next) => {
  try{
    const id = req.params.id
    const city = req.body
    await db.editCity(id, city)
    res.sendStatus(200)
  } catch (e) {
    next(e)
  }
})

router.delete('/:id', async (req, res, next) => {
  try{
    const id = req.params.id
    await db.delCity(id)
    res.sendStatus(200)
  } catch (e) {
    next(e)
  }
})

export default router