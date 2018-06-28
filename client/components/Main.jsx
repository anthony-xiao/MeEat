import React from 'react'
import {newRest} from '../api/apiClient'

class main extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      city: ''
    }
    this.addRestaurant = this.addRestaurant.bind(this)
    this.newName = this.newName.bind(this)
    this.newCity = this.newCity.bind(this)
    this.postNewRes = this.postNewRes.bind(this)
  }

  addRestaurant () {
    this.setState({
      currentRestaurants: [...this.state.currentRestaurants, this.state.newRestaurant]
    })
  }

  newName (e) {
    this.setState({
      name: e.target.value
    })
  }

  newCity (e) {
    this.setState({
      city: e.target.value
    })
  }

  postNewRes () {
    newRest(this.state)
  }

  render () {
    return (
      <div>
        Name: <input type="text" name="restaurant" onChange={this.newName}/>
        City: <input type="text" name="city" onChange={this.newCity}/>
        <button type="submit" onClick={this.postNewRes}>Add</button>
        <div>
        </div>
      </div>
    )
  }
}

export default main
