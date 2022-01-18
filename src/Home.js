
import { useRoutes } from "react-router-dom";
import { useEffect, useState } from "react";
import CircleLoader from "react-spinners/CircleLoader";

import App from "./App";
import Teaching from "./components/main_nav/navUnit/Teaching";

import './css/reset.css';

function Home () {
    const defaultMode = localStorage.getItem("mode") ?? "lightMode"

    const [loading, SetLoading] = useState(true)
    useEffect(() => {
      setTimeout(() => {
        SetLoading(() => false)
      }, 1000);
    }, [])
  
    let element = useRoutes([
        { path:"/", element:<App defaultMode={defaultMode} /> },
        { path:"/Teaching", element: <Teaching mode={defaultMode} /> }
    ])

    return loading ? 
    (
        <div className='loading' style={{backgroundColor: defaultMode === "lightMode" ? "white" : "black"}}>
            <CircleLoader 
            margin={"30vw"} 
            size={"20vw"} 
            color={defaultMode === "lightMode" ? "rgb(0, 42, 97)" : "rgb(149, 248, 255)"}
            loading={loading} 
            speedMultiplier={2} 
            />
        </div>
    )
    :
    element
}

export default Home