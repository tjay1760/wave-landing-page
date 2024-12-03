import './App.css'
import './index.css'
import React from 'react'
import Homepage from './components/Home/Homepage'
import Navbar from './components/Navigation/Navbar'
function App() {

  return (
    <>
      <div className='w-full'>
        <Navbar/>
<Homepage/>
      </div>
        
    </>
  )
}

export default App
