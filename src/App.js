import React from 'react'
import MainPage from './components/MainPage'
import About from './components/About';
import AllRoutes from './AllRoutes';
import { useNavigate } from 'react-router-dom';
// import { BrowserRouter as Router,Rout } from 'react-router-dom';
function App() {
  const navigate=useNavigate();
  return (
    <div>
      {/* <MainPage/> */}
      {/* <About/> */}
      <AllRoutes/>
    </div>
  )
}

export default App
