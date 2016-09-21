import React, { Component } from 'react'

class Heading extends Component {

  render () {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2>{this.props.role}</h2>
      </div>
    )
  }
}

export default Heading
