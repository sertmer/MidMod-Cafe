import React, { Component } from 'react';
import './App.css';
import ReservationsContainer from '../ReservationsContainer/ReservationsContainer'
import Form from '../Form/Form'
import { getReservations } from '../apiCalls'
class App extends Component {
  constructor() {
    super() 

    this.state = {

    }
  }

  componentDidMount() {
    getReservations()
  }
  
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
        <Form />
        </div>
        <div className='resy-container'>
          <ReservationsContainer />
        </div>
      </div>
    )
  }
}

export default App;
