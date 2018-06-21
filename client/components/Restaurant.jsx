import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

const Restaurant = props => {
  return <div>
    <ul>
      <li>{props.name}</li>
    </ul>
  </div>
}

export default Restaurant