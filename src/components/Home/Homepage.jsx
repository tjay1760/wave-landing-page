import React from 'react'
import { FAQs,Footer,FloatingContact,Hero,Testimonials,GetStarted,WhatYouGet,Tools, FloatingDemo,ToolsScroll} from './index'
const Homepage = () => {
    return (
        <>
          <div className='w-full'>
   
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

export default Homepage