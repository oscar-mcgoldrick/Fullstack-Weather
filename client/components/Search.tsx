import { useState, FormEvent, ChangeEvent } from "react";
import { getCityInfo } from "../apis/cityApi";
import { getCityTemps } from "../apis/weatherApi";
import { Forecast } from "../../models/forecasts";
import { CityData } from "../../models/cities";
import { addCity } from "../actions/cities";
import { useAppDispatch } from "../hooks/hooks";

export default function Search() {
  const [formState, setFormState] = useState('')
  const [cityForecast, setCityForecast] = useState(null as null | Forecast)
  const [cityDetails, setCityDetails] = useState(null as null | CityData)
  const dispatch = useAppDispatch()

  async function handleSubmit(evt: FormEvent) {
    evt.preventDefault()
    const response = await getCityInfo(formState)
    const newCity = {
      country: response[0].country,
      lat: response[0].latitude,
      long: response[0].longitude,
      name: response[0].name
    }
    setCityDetails(newCity)
    getCityTemps(newCity.lat, newCity.long)
      .then(data => setCityForecast(data))
  }

  function handleChange(evt: ChangeEvent<HTMLInputElement>) {
    const {value} = evt.currentTarget
    setFormState(value)
  }

  async function handleSave() {
    await dispatch(addCity(cityDetails))
  }

  if(cityForecast != null) {
    return <>
    <form onSubmit={handleSubmit} className="search">
    <div className="col-lg-6">
      <div className="input-group input-group-lg">
        <input type='text' onChange={handleChange} className="form-control" placeholder='Search for...'/>
          <span className='input-group-btn'>
            <button className="btn btn-default" type="submit">Search</button>
          </span>
      </div>
    </div>
  </form>
    <div className="city">
    <h2>{cityDetails?.name}, {cityDetails?.country}</h2>
    <h3>Forecast</h3>
    <div className="saveButton">
      <button onClick={handleSave}>Save</button>
    </div>
    </div>
    <div className="weather">
    {cityForecast[0].map((time, index) => (<p>Date/Time: {time}   The forecast temperature:{cityForecast[1][index]}°C</p>))}
  </div>
  </>
  } else {
    return <>
  <p>Type in a hecking city mate!</p>
  <form onSubmit={handleSubmit}>
    <div className="col-lg-6">
      <div className="input-group input-group-lg">
        <input type='text' onChange={handleChange} className="form-control" placeholder='Search for...'/>
          <span className='input-group-btn'>
            <button className="btn btn-default" type="submit">Search</button>
          </span>
      </div>
    </div>
  </form>
  </>
}

}