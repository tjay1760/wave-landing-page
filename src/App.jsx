import './App.css'
import './index.css'
import React from 'react'
import { FAQs,Footer,FloatingContact,Navbar,Hero,Testimonials,GetStarted,WhatYouGet,Tools, FloatingDemo}from './components'
function App() {

  return (
    <>
      <div>
<h1 className='text-blue-400 font-black border-spacing-8'>Tuli Landing</h1>
<Navbar/>
<Hero/>
<FloatingDemo/>
<WhatYouGet/>
<Tools/>
<Testimonials/>
<GetStarted/>
<FAQs/>
<FloatingContact/>
<Footer/>
      </div>
        
    </>
  )
}

export default App
