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
    this.updateNewRes = this.updateNewRes.bind(this) 
  }

  addRestaurant () {
    this.setState({
      currentRestaurants: [...this.state.currentRestaurants, this.state.newRestaurant]
    })
  }

  updateNewRes (e) {
    this.setState({
      newRestaurant: e.target.value
    })
  }

  render () {
    return (
      <Router>
        <div>
          <h2>Restaurant List</h2>
          <input type="text" name="restaurant" onChange={this.updateNewRes}/>
          <button onClick={this.addRestaurant}>Add</button>
        </div>

      </Router>
    )
  }
}

export default App
