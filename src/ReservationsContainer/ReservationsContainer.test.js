import React from 'react';
import { shallow } from 'enzyme';
import ReservationsContainer from './ReservationsContainer';

describe('ReservationsContainer', () => {
  let wrapper
  let mockReservations
  let mockRemoveReservation
  beforeEach(() => {
    mockReservations = [{
      "id": 1,
      "name": "Christie",
      "date": "12/29",
      "time": "7:00",
      "number": 12
  }]

    mockRemoveReservation = jest.fn
    wrapper = shallow(<ReservationsContainer 
      reservations={mockReservations}  
      removeReservation={mockRemoveReservation}
    />)
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})