import {ADD_CITY, SET_CITIES, DEL_CITY, UPDATE_CITY} from '../actions/cities'
import { Action, cityWithId } from '../../models/cities'

const initialState = [] as cityWithId[]

export default function citiesReducers(state = initialState, action: Action) {
  const {type, payload} = action
  switch(type) {
    case ADD_CITY: 
      return [...state, payload]

    case SET_CITIES:
      return payload

    case DEL_CITY: 
      return state.filter(city => city.id !== payload)

    // case UPDATE_CITY: 
    //   return state.map((city) => {
    //     if (city.id === payload.id) {
    //       return { ...city, watched: payload.seen }
    //     }
    //     return movie
    //   })
    default:
      return state
  }
}