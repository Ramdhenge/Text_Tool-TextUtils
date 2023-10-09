import React, { useState } from 'react'
import Nav from './Components/Nav';
import './App.css';
import './Media.css'
import TextBox from './Components/TextBox';
import About from './Components/About';
import { Routes, Route } from 'react-router-dom';

function App() {

  const [bg, setbg] = useState('white')
  const [btn, setbtn] = useState('4%')
  const [mode, setmode] = useState('Dark')
  const [style, setStyle] = useState({ background: 'white', transition: 'all .3s' })
  const [fbtn, setFbtn] = useState({ color: 'rgb(88, 0, 175)' })

  const toggleMode = () => {
    if (mode === 'Dark' && btn === '4%') {
      setbg('#8f4efff5')
      setmode('Light')
      setbtn('54%')
      setStyle({ background: '#223349', color: 'white', transition: 'all .3s' })
      setFbtn({ color: '#c386ff' })
      document.body.style.backgroundColor = "#223349";
      document.body.style.transition = ".3s";
    }
    else {
      setbg('white')
      setmode('Dark')
      setbtn('4%')
      setStyle({ background: 'white', transition: 'all .3s' })
      setFbtn({ color: 'rgb(88, 0, 175)' })
      document.body.style.backgroundColor = "white";
      document.body.style.transition = ".3s";
    }
  }

  return (
    <>
      <div style={style}>
        <Nav m1="Home" m2="About" m3="Contact" modest={mode} toggleMode={toggleMode} bg={bg} btn={btn} />
        {/* <Nav/> */}
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/' element={<TextBox modest={mode} style={style} fbtn={fbtn} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;