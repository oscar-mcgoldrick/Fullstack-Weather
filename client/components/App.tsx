import { Outlet } from "react-router-dom"
import { useEffect } from "react"

import { getCities } from "../actions/cities"

import Nav from "./Nav"
import Header from "./Header"
import Footer from "./Footer"
import { useAppDispatch } from "../hooks/hooks"

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getCities())
  }, [dispatch])
  
  return (
    <>
      <Header />
      <Nav />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
