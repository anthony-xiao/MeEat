import React from 'react'
import {Route, Link} from 'react-router-dom'
import RestaurantList from './RestaurantList'
import Main from './Main'

class App extends React.Component {
  render () {
    return (
      <div className="main">
        <h2>Restaurant List</h2>
        <Link to='/'>Home</Link> <br/>
        <Link to='/RestaurantsList'>Restaurants</Link>
        <Route exact path='/' component={Main} />
        <Route path='/RestaurantsList' component={RestaurantList} />
      </div>
    )
  }
}

export default App
