import { Link } from "react-router-dom";

export default function Nav() {
  return <>
    <nav>
      <Link to='/'><li>Home</li></Link>
      <Link to='/weather/'><li>NZ Weather</li></Link>
      <Link to='/weather/search'><li>Search</li></Link>
    </nav>
  </>
}