import React from 'react'
import {Link} from 'react-router'

const ToolsScroll = ({img,header,sub,desc,link,route}) => {
  return (
    <div className='w-full h-lvh bg-toolsBackgroundColor2'>
      <div className="card-holder">
        <img></img>
        <div className="card-info">
          <h1>{header}</h1>
          <h2>Stop chasing clients for money</h2>
          <p>Reduce unpaid invoices, keep tabs on your income, and get paid faster.</p>
          <Link to = "/invoicing">Learn More about our invoicing feature</Link>
        </div>
      </div>
    </div>
  )
 
}
ToolsScroll.propTypes = {
  header: propTypes.string
    } 

export default ToolsScroll