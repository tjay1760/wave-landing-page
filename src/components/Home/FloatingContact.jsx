import React from 'react'
import { Link } from 'react-router'
const FloatingContact = () => {
  return (
<div className="border border-blue-500 w-2/3 h-16 p-28 absolute top-200rem bg-white left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-row justify-between">
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