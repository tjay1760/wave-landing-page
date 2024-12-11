import React from 'react'

const FloatingDemo = () => {
  return (
    <div className="youtube-video md:absolute md:ml-96 md:top-[43rem] border border-opacity-5 border-white rounded-xl shadow-2xl">
    <iframe width="100%" height="100%" className ="rounded-xl" src="https://www.youtube.com/embed/Tn6-PIqc4UM" title="React in 100 Seconds" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
  )
}

export default FloatingDemo