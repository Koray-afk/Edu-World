import React from 'react'
import './Title.css'

function Title(props) {
  return (
    <div>
      <div className="title">
        <p>{props.smalltitle}</p>
        <h2>{props.bigtitle}</h2>
      </div>
    </div>
  )
}

export default Title
