
import { useRoutes } from "react-router-dom";

import App from "./App";
import { Teaching } from "./components/main_nav/NavUnit";


function Home () {
    let elements = useRoutes([
        { path:"/", element:<App /> },
        { path:"Teaching", element: <Teaching /> }
    ])

    return elements
}

export default Home