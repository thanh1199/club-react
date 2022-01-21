
import { useLocation, useRoutes } from "react-router-dom";
import { useEffect, useState } from "react";
import CircleLoader from "react-spinners/CircleLoader";

import themesArray from "./components/text_data/themes.json"

import App from "./App";
import Teaching from "./components/main_nav/navUnit/Teaching";
import Themes from "./components/main_nav/navUnit/Themes";

import './css/reset.css';

function Home () {

  const { search } = useLocation()
  // const test = useLocation()
  // console.log(test)
  const query =  new URLSearchParams(search)
  const requestTheme = query.get("theme")

  if (requestTheme) {localStorage.setItem("theme", requestTheme)}
  if (localStorage.getItem("theme") === null) {localStorage.setItem("theme", "soft")}
  const defaultTheme = 
  themesArray.find((theme) => theme === localStorage.getItem("theme")) === undefined ? "soft" :
  localStorage.getItem("theme")

  const [loading, SetLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      SetLoading(() => false)
    }, 1000);
  }, [])

  let element = useRoutes([
      { path:"/", element:<App theme={defaultTheme} /> },
      { path:"/Teaching", element: <Teaching theme={defaultTheme} /> },
      { path:"/Themes", element: <Themes theme={defaultTheme} /> }
  ])

  return loading ? 
  (
      <div className='loading'>
          <CircleLoader 
          margin={"30vw"} 
          size={"20vw"} 
          color={"rgb(0, 42, 97)"}
          loading={loading} 
          speedMultiplier={2} 
          />
      </div>
  )
  :
  element
}

export default Home