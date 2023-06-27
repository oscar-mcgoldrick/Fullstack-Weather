import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../hooks/hooks"
import { useEffect, useState } from "react"
import { cityWithId } from "../../models/cities"
import { getCityTemps } from "../apis/weatherApi"
import { Forecast } from "../../models/forecasts"

export default function City() {
  const {id} = useParams()
  const cities = useAppSelector(state => state.cities as cityWithId[])
  const city = cities.find(city => city.id === +id)
  const [cityForecast, setCityForecast] = useState(null as null|Forecast)

  useEffect(() => {
    getCityTemps(city?.lat, city?.long)
      .then(data => setCityForecast(data))
  }, [city])

  if (cityForecast != null) {return (
    <>
      <div className="city">
        <h2>{city?.name}, {city?.country}</h2>
        <h3>Forecast</h3>
        {cityForecast[0].map((time, index) => (<p>Date/Time: {time}, The forecast temperature:{cityForecast[1][index]}°C</p>))}
      </div>
    </>
  )
} else {
  return (
    <>
      <div className="loading">
        <p>Loading...</p>
      </div>
    </>
  )
}


}