import useLocoScroll from './components/hooks/UseLocalScroll'
import './App.scss'
import Page1 from './pages/page1/Page1'
import CustomCursor from './customCursor/CustomCursor'
import Stack from './components/stack/Stack'
import {React, useEffect, useRef, useState } from 'react'

function App() {
  const ref = useRef(null);
  const [preloader, setPreloader] = useState(true)
  useLocoScroll(!preloader);


  // useEffect(() => {
  //   if (!preloader && ref) {
  //     if (typeof window === "undefined" || !window.document) {
  //       return;
  //     }
  //   }
  // }, [preloader]);

  const [timer, setTimer] = useState(3);

  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
    // return () => clear();
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  // if (typeof window === "undefined" || !window.document) {
  //   return null;
  // }



  return (
    <div className="app" id='app'>
      <CustomCursor/>
      {preloader ? (
      <div className='loader absolute'>
        <h1>GigCrafters</h1>
        <h2>TURNS IDEAS TO CODE</h2>
      </div>
      ) : (
      <div
          className="main-container"
          id="main-container"
          data-scroll-container
          ref={ref}
        >
      <Page1/>
      </div>
      )}
    </div>
  )
}

export default App
