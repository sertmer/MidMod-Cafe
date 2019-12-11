import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      date: '',
      time: '',
      number: 1
    }
  }

  handleChange = e => {
    if (e.target.name === 'number') {
      let stringToNumber = parseInt(e.target.value)
      this.setState({ [e.target.name]: stringToNumber})
    } else {
      this.setState({ [e.target.name]: e.target.value})
    }
  }

  render() {
    return (
      <section>
        <input 
          className="name-input"
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input 
          placeholder='Date'
          name='date'
          value={this.state.date}
          onChange={this.handleChange}
        />
        <input 
          placeholder='time'
          name='time'
          value={this.state.time}
          onChange={this.handleChange}
        />
        <input 
          type='number'
          placeholder='Number of Guests'
          name='number'
          value={this.state.number}
          onChange={this.handleChange}
        />
        <button 
          onClick={() => this.props.addReservation(this.state)}>
          Submit, why dontcha?
        </button>
      </section>
    )
  }
}

export default Form