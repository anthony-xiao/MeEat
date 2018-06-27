import React from 'react'

class main extends React.Component {
  render () {
    return (
      <div>
        <input type="text" name="restaurant" onChange={this.updateNewRes}/>
        <button onClick={this.addRestaurant}>Add</button>
      </div>
    )
  }
}

export default main
