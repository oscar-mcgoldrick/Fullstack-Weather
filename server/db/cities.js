import db from './connection'

export function getAllCities() {
  return db('cities').select()
}

export function getSingleCity(id) {
  return db('cities').select().where('id', id)
}

export function addCity(city) {
  return db('cities').insert(city).returning('*')
}

export function editCity(id, city) {
  return db('cities').update(city).where('id', id).returning('*')
}

export function delCity(id) {
  return db('cities').delete().where('id', id)
}