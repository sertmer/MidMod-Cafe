import React, { Component } from 'react';
import './App.css';
import ReservationsContainer from '../ReservationsContainer/ReservationsContainer'
import Form from '../Form/Form'
import { getReservations } from '../apiCalls'
class App extends Component {
  constructor() {
    super() 
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    getReservations()
      .then(reservations => this.setState({ reservations }))
  }

  addReservation = (newReservation) => {
    this.setState({reservations: [...this.state.reservations, newReservation]})
  }
  
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
        <Form 
          addReservation={this.addReservation}
        />
        </div>
        <div className='resy-container'>
          <ReservationsContainer 
            reservations={this.state.reservations}
          />
        </div>
      </div>
    )
  }
}

export default App;
