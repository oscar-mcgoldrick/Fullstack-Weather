import * as api from '../apis/cityApi'
import { ThunkAction } from '../store'
import { cityWithId, CityData } from '../../models/cities'

export const SET_CITIES = 'SET_CITIES'
export const DEL_CITY = 'DEL_CITY'
export const UPDATE_CITY = 'UPDATE_CITY'
export const ADD_CITY = 'ADD_CITY'

export function setCities(cities: cityWithId[]) {
  return {
    type: SET_CITIES,
    payload: cities
  }
}

export function delCityAction(id: number) {
  return {
    type: DEL_CITY,
    payload: id,
  }
}

export function addCityAction(city: CityData | null) {
  return {
    type: ADD_CITY,
    payload: city
  }
}

export function updateCityAction(id: number, city: CityData) {
  return {
    type: UPDATE_CITY,
    payload: {id, city}
  }
}

export function getCities(): ThunkAction {
  return async (dispatch) => {
    try {
      const cityArr = await api.getCities()
      dispatch(setCities(cityArr))
    } catch (e) {
      console.error('action pooped the bed...', e)
    }
  }
}

export function delCity(id: number): ThunkAction {
  return async (dispatch) => {
    try {
      await api.delCity(id)
      dispatch(delCityAction(id))
    } catch (e) {
      console.error('action pooping again...', e)
    }
  }
}

export function addCity(city: CityData | null): ThunkAction {
  return async (dispatch) => {
    try {
      const newCity = await api.addCity(city)
      console.log(city)
      dispatch(addCityAction(city))
    } catch (e) {
      console.error('these actions keep pooping :(', e)
    }
  }
}

export function updateCity(id: number, city: CityData): ThunkAction {
  return async (dispatch) => {
    try {
      await api.updateCity(id, city)
      dispatch(updateCityAction(id, city))
    } catch (e) {
      console.error('poopy hecking actions :C', e)
    }
  }
}