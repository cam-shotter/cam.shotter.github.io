import React, { Component } from 'react'

import Heading from './heading'

class App extends Component {

  constructor (props) {
    super(props)

  }

  render () {
    return (
      <div>
        <Heading name={this.props.name} role={this.props.role} />
      </div>
    )
  }

}

export default App
