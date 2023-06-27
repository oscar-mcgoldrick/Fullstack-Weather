import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App'
import Home from './components/Home'
import Cities from './components/Cities'
import City from './components/City'
import Search from './components/Search'


export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />}/>
      <Route path="/weather" element={<Cities />} />
      <Route path="/weather/:id" element={<City />} />
      <Route path="/weather/search" element={<Search />} />
    </Route>
  )
)

export default router
