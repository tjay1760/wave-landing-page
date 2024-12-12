import React from 'react'
import { Link } from 'react-router'
const FloatingContact = () => {
  return (
<div className="md:border border-blue-500 w-full md:w-2/3 md:h-16 p-2 md:p-28 md:absolute md:top-200rem bg-white md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 flex flex-col md:flex-row justify-between">
<div className='text-8xl'>🤝</div>
<div>
<h1 className='text-2xl font-bold'>Do what you love. Leave the rest to us.</h1>
<Link to ={"/contact"}>
<button className=' border border-blue-200 px-4 py-3 rounded-3xl mt-2 bg-blue-500 hover:bg-blue-400'>Let&apos;s do this</button>
</Link>

</div>
</div>

  )
}

export default FloatingContact