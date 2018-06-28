import React from 'react'
import {newRest} from '../api/apiClient'

class main extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      city: '',
      rating: 0
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
      name: e.target.name,
      city: e.target.value,
      rating: e.target.value

    })
    console.log(this.state.newRestaurant)
  }

  render () {
    return (
      <div>
        Name: <input type="text" name="restaurant" onChange={this.updateNewRes}/>
        City: <input type="text" name="city" onChange={this.updateNewRes}/>
        Rating: <input type="text" name="personal_rating" onChange={this.updateNewRes}/>
        <button type="submit">Add</button>
        <div>
          {this.state.newRestaurant}
        </div>
      </div>
    )
  }
}

export default main
