import React from 'react'
import {Link} from 'react-router'
import PropTypes from 'prop-types'
import { Tilt } from 'react-tilt'
import { FaArrowRight } from "react-icons/fa";



const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            15,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

const ToolsScroll = ({data,color}) => {

  return (
    <div className={`'w-full h-lvh ${color}`}>
          {console.log(data.header)}
      <div className="card-holder flex flex-cols justify-center py-11 gap-16 min-h-0">
        <Tilt options= {defaultOptions}>
        <div className="glass">
        <img src={data.img} className='h-96 w-96 object-cover'/>
        </div>
        </Tilt>
        
        <div className="card-info flex flex-col justify-center gap-2">
          <h1 className='text-3xl font-bold text-blue-950'>{data.header}</h1>
          <h2 className='text-2xl font-normal text-blue-950'>{data.sub}</h2>
          <p className='w-96'>{data.desc}</p>
          <Link to = {data.route} className='pt-8 text-blue-800 hover:text-blue-500 flex items-center gap-2'>{data.link}
          <FaArrowRight/>
          </Link>
        </div>
      </div>
    </div>
  )
 
}
ToolsScroll.propTypes = {
  data:PropTypes.object,
  color: PropTypes.string,
      } 

export default ToolsScroll