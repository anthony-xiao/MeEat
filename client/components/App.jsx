import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      newRestaurant: '',
      currentRestaurants: ['Depot', 'Masu']
    }
    this.addRestaurant = this.addRestaurant.bind(this)
  }

  addRestaurant () {
    this.setState({
      
    })
  }

  render () {
    return (
      <Router>
        <div>
          <h2>Restaurant List</h2>
          <p>{this.state.currentRestaurants}</p>
        </div>
      </Router>
    )
  }
}

export default App
