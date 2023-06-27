import { useAppSelector, useAppDispatch } from "../hooks/hooks";
import {} from '../actions/cities'
import { cityWithId } from "../../models/cities";
import { Link } from "react-router-dom";

export default function Cities() {
  const dispatch = useAppDispatch()
  const cityList = useAppSelector(state => state.cities as cityWithId[])

  return (
    <>
    <ul>
      {cityList.map((city, i) => {
        return <>
        <div className="cities" key={i}>
          <Link to={`/weather/${city.id}`} key={i}><h3>{city.name}</h3></Link>
        </div>
        </>
      })}
      </ul>
    </>
  )
}