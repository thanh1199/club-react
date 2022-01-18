
import { useState } from 'react';

import './css/reset.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App({ defaultMode }) {
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

  const [mode, SetMode] = useState(defaultMode)

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
      <div id='settingMode' onClick={() => HandleSetMode()}>
        <div id="settingButton" className={mode}></div>
      </div>
      <Header mode = {mode} />
      <Main mode = {mode} />
      <Footer mode = {mode} />
    </div>
  );
}

export default App;
