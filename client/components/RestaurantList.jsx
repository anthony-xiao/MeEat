import React from 'react'
import Restaurant from './Restaurant'
import {allRest} from '../api/apiClient'

class RestaurantList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentRestaurants: ['Depot', 'Masu']
    }
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
