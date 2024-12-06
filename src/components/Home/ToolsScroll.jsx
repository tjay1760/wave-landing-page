import React from 'react'
import {Link} from 'react-router'
import PropTypes from 'prop-types'

const ToolsScroll = ({data}) => {
  return (
    <div className='w-full h-lvh bg-toolsBackgroundColor2'>
          {console.log(data.header)}
      <div className="card-holder">
        <img></img>
        <div className="card-info">
          <h1>{data.header}</h1>
          <h2>{data.sub}</h2>
          <p>{data.desc}</p>
          <Link to = {data.route}>{data.link}</Link>
        </div>
      </div>
    </div>
  )
 
}
ToolsScroll.propTypes = {
  data:PropTypes.object,
  header: PropTypes.string,
  sub: PropTypes.string
    } 

export default ToolsScroll