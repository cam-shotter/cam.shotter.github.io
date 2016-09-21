import React, { Component } from 'react'

import Heading from './heading'

class App extends Component {

  constructor (props) {
    super(props)

  }

  render () {
    return (
      <div>
        <About />
        <Portfolio />
        <Heading name={this.props.name} role={this.props.role} />
        <Blog />
        <Contact />
      </div>
    )
  }

}

export default App
