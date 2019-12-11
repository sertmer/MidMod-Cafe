import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super()

    this.state = {
      name: '',
      date: '',
      time: '',
      number: null
    }
  }

  render() {
    return (
      <section>
        <input 
          placeholder='Name'
          name='name'
          value={this.state.name}
        />
        <input 
          placeholder='Date'
          name='date'
          value={this.state.date}
        />
        <input 
          placeholder='time'
          name='time'
          value={this.state.time}
        />
        <input 
          placeholder='Number of Guests'
          name='number'
          value={this.state.number}
        />
      </section>
    )
  }
}

export default Form