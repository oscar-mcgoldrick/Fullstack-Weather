import request from "superagent";
import { CityData } from "../../models/cities";

const citiesURL = '/api/v1/cities'

export async function getCities() {
  const res = await request.get(citiesURL)
  return res.body
}

export async function getCity(id: number) {
  const res = await request.get(`${citiesURL}/${id}`)
}

export async function addCity(city: CityData | null) {
  await request.post(citiesURL).send(city)
}

export async function updateCity(id: number, city: CityData) {
  await request.patch(`${citiesURL}/${id}`).send(city)
}

export async function delCity(id: number) {
  await request.delete(`${citiesURL}/${id}`)
}

export function getCityInfo (cityName: string) {
  return request
    .post('/api/v1/city')
    .send({cityName})
    .then((res) => {return res.body})
    .catch(e => console.log(e.message))
}