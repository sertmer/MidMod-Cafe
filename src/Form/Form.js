import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super()

    this.state = {
      title: '',
      description: ''
    }
  }

  render() {
    return (
      <>
      <input 
        placeholder=''
        name='title'
      />
      </>
    )
  }
}

export default Form