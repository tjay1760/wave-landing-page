import React from 'react'

const ourTestimonials = [
  {img:"",name:"jane cook",org:"microverse",msg:"Wave invoicing makes your life a whole lot easier and takes that worry off you. I've tried Quickbooks— a bit more complicated and technical, and takes more time to set up"},
  {img:"",name:"jane cook",org:"microverse",msg:"Wave invoicing makes your life a whole lot easier and takes that worry off you. I've tried Quickbooks— a bit more complicated and technical, and takes more time to set up"},
  {img:"",name:"jane cook",org:"microverse",msg:"Wave invoicing makes your life a whole lot easier and takes that worry off you. I've tried Quickbooks— a bit more complicated and technical, and takes more time to set up"},
]
const Testimonials = () => {
  return (
    <div className='w-full h-lvh bg-heroBackgroundColor flex flex-col items-center'>
      <h1 className='text-3xl w-128 text-center p-10'>Tuli has helped over 2 million small business owners
      in the US and Canada take control of their finances</h1>
      <div className="testimonial-wrapper flex flex-cols gap-6">
        {ourTestimonials.map((testimonial,index)=> <div key ={index}
        className="testimonial w-80 h-96 bg-slate-500">
          {testimonial.name}
          </div>)}

      </div>

    </div>
  )
}

export default Testimonials