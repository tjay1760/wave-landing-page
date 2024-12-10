import React from 'react'
import head1 from "../../assets/headshot_1.jpeg"
import head2 from "../../assets/headshot_2.jpeg"
import head3 from "../../assets/headshot_3.jpeg"



const ourTestimonials = [
  {img:head1,name:"Jane Cook",org:"Microsoft",msg:"Wave invoicing makes your life a whole lot easier and takes that worry off you. I've tried Quickbooks— a bit more complicated and technical, and takes more time to set up"},
  {img:head2,name:"Marcia White",org:"Safaricom",msg:"Most of my clients pay with credit cards using the secure link on the invoice. That is a massive time saver and helps me get paid faster!"},
  {img:head3,name:"James Clear",org:"Airtel",msg:"not just a cool piece of software, it is giving peace of mind to people.” You deserve to know your taxes aren't something you have to sweat over the entire calendar year."},
]
const Testimonials = () => {
  return (
    <div className='w-full h-lvh bg-heroBackgroundColor flex flex-col items-center'>
      <h1 className='text-3xl w-128 text-center p-10'>Tuli has helped over 2 million small business owners
      in the US and Canada take control of their finances</h1>
      <div className="testimonial-wrapper flex flex-cols gap-6">
        {ourTestimonials.map((testimonial,index)=> <div key ={index}
        className="testimonial w-80 h-96 bg-blue-200">
          <div className="details-wrapper flex gap-6 p-4">
          <img className='h-12 w-12 rounded-full' src={testimonial.img}/>
          <div className="details">
          <div className="name font-semibold">{testimonial.name}</div>
          <div className="occupation">{testimonial.org}</div>
          </div>
          </div>
          <p className='testament p-2 text-center text-2xl'>&quot;{testimonial.msg}&quot;</p>                   
          </div>)}

      </div>
      <button className=" mt-6 p-4 text-white font-semibold transition-colors duration-150 bg-blue-900 rounded-full focus:shadow-outline hover:bg-blue-700">Get Started Today</button>
    </div>
  )
}

export default Testimonials