import request from 'superagent'
import { CityData } from '../../models/cities'
import {Forecast} from '../../models/forecasts'


export function getCityTemps(lat: number | undefined, long: number | undefined) {
  return request.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m`)
    .then(data =>  [data.body.hourly.time, data.body.hourly.temperature_2m] as Forecast)
}