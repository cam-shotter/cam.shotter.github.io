import React, { Component } from 'react'

class Portfolio extends Component {

  render () {
    return (
      <div className="portfolio">
        <h1>{this.props.name}</h1>
        <h2>{this.props.role}</h2>
      </div>
    )
  }
}

export default Portfolio
