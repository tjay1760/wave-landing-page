import './App.css'
import './index.css'
import React from 'react'
import { FAQs,Footer,FloatingContact,Navbar,Hero,Testimonials,GetStarted,WhatYouGet,Tools, FloatingDemo,ToolsScroll}from './components'
function App() {

  return (
    <>
      <div className='w-full'>
<Navbar/>
<Hero/>
<FloatingDemo/>
<WhatYouGet/>
<Tools/>
<ToolsScroll/>
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
