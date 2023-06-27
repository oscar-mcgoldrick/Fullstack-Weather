import { Outlet } from "react-router-dom"
import { useEffect } from "react"

import { getCities } from "../actions/cities"

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
      <Outlet />
      <Footer />
    </>
  )
}

export default App
