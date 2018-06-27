import React from 'react'
import {HashRouter as Route, Link} from 'react-router-dom'
import RestaurantList from './RestaurantList'
import Main from './Main'

const App = () => {
  return (
    <div>
      <Link to='/RestaurantsList'>Restaurants</Link>
      <Route path='/RestaurantsList' component={RestaurantList} />
      <h2>Restaurant List</h2>
      <Main />

      {/* <RestaurantList /> */}
    </div>
  )
}

export default App
