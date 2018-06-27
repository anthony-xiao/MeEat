import React from 'react'
import Restaurant from './Restaurant'
import {allRest} from '../api/apiClient'

class RestaurantList extends React.Component {
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

  componentDidMount () {
    allRest()
      .then(rest => {
        const names = rest.rest.map(res => {
          return res.name
        })
        this.setState({
          currentRestaurants: names
        })
      }
      )
  }

  render () {
    return (
      <div>
        <input type="text" name="restaurant" onChange={this.updateNewRes}/>
        <button onClick={this.addRestaurant}>Add</button>
        <h2>List</h2>
        {
          this.state.currentRestaurants.map((res, i) => {
            return (
              <Restaurant key={i} name={res}/>
            )
          })
        }

      </div>
    )
  }
}

export default RestaurantList
