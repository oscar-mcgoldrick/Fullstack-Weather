import db from './connection'

export function getAllUsers() {
  return db('users').select()
}