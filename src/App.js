
import './css/reset.css';
import themesArray from "./components/text_data/themes.json"
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import { useState } from 'react';

function App({ theme }) {
  // window.onclick = e => {
  //   console.log(e.target);  // to get the element
  //   console.log(e.target.tagName);  // to get the element tag name alone
  // }  

  const [nowTheme, setNowTheme] = useState(theme)
 
  const handleSetTheme = () => {
    const now = themesArray.indexOf(nowTheme)
    const next = (now + 1) % themesArray.length
    localStorage.setItem("theme", themesArray[next])
    document.getElementById("setThemes").classList.remove("rotate")
    setTimeout(() => document.getElementById("setThemes").classList.add("rotate"), 200)
    setNowTheme(() => themesArray[next])
  }
  return (
    <div theme="dark" className={`App body_${nowTheme}`} style={{position: "relative"}}>
      <div id='setThemes' className='rotate' onClick={() => handleSetTheme()}>
        <i className="fas fa-adjust"></i>
      </div>
      <Header theme = {nowTheme} />
      <Main theme = {nowTheme}/>
      <Footer theme = {nowTheme} />
    </div>
  );
}

export default App;
