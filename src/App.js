
import { useEffect, useState } from 'react';
import CircleLoader from "react-spinners/CircleLoader";

import './css/reset.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  // window.onclick = e => {
  //   console.log(e.target);  // to get the element
  //   console.log(e.target.tagName);  // to get the element tag name alone
  // }  

  
// var axios = require('axios');
// var data = '';

// var config = {
// method: 'get',
// url: 'https://programmer-club.herokuapp.com/api/v1/Subjects/',
// headers: { },
// data : data
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });
  



  //-----------------

  const [loading, SetLoading] = useState(true)

  let mode__ = localStorage.getItem("mode") ?? "lightMode"
  const [mode, SetMode] = useState(mode__)

  useEffect(() => {
    setTimeout(() => {
      SetLoading(() => false)
    }, 2000);
  }, [])


  function HandleSetMode () {
    if (mode === "darkMode") {
      SetMode(() => "lightMode")
      localStorage.setItem("mode", "lightMode")
    }
    if (mode === "lightMode") {
      SetMode(() => "darkMode")
      localStorage.setItem("mode", "darkMode")
    }
  }
  return (
    <div className={`App body_${mode}`} style={{position: "relative"}}>
      {
        loading ?
        <div className='loading'>
        <CircleLoader 
          margin={"30vw"} 
          size={"20vw"} 
          color={"rgb(149, 248, 255)"} 
          loading={loading} 
          speedMultiplier={2} 
        />
        </div>
        :
        <>
        <div id='settingMode' onClick={() => HandleSetMode()}>
          <div id="settingButton" className={mode}></div>
        </div>
        <Header mode = {mode} />
        <Main mode = {mode} />
        <Footer mode = {mode} />
        </>
      }
    </div>
  );
}

export default App;
