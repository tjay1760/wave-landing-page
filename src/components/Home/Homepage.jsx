import React from 'react'
import { FAQs,Footer,FloatingContact,Hero,Testimonials,GetStarted,WhatYouGet,Tools, FloatingDemo} from './index'
const Homepage = () => {
    return (
        <>
          <div className='w-full'>
   
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

export default Homepage