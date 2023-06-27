export interface CityData {
  name: string
  country: string
  lat: number
  long: number
}

export interface cityWithId extends CityData {
  id: number
}

interface updatePayload {
  id: number,
  city: CityData
}

export type Action = 
| { type: 'SET_CITIES', payload: cityWithId[] }
| { type: 'ADD_CITY', payload: CityData }
| { type: 'DEL_CITY', payload: number }
| { type: 'UPDATE_CITY', payload: updatePayload}