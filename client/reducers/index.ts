import { combineReducers } from 'redux'

import citiesReducers from './cities'
// import stuff from './stuff'

export default combineReducers({
  // stuff
  cities: citiesReducers
})
