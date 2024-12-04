import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div className='bg-heroBackgroundColor h-24 w-full'>
      <h1>Tuli</h1>
      <Link to="/">Home</Link>
      <Link to ="pricing">Pricing</Link>
      <Link to ="blog">Blog</Link>
    </div>
  )
}

export default Navbar