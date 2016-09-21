import React, { Component } from 'react'

import Heading from './heading'

class App extends Component {

  constructor (props) {
    super(props)

  }

  render () {
    return (
      <div>
        {this.props.name}
      </div>
    )
  }

}

export default App
