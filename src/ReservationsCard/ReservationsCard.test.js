import React from 'react';
import { shallow } from 'enzyme';
import ReservationsCard from './ReservationsCard';

describe('ReservationsCard', () => {
  let wrapper
  let mockReservation
  let mockRemoveReservation
  beforeEach(() => {
    mockReservation = [{
      "id": 1,
      "name": "Christie",
      "date": "12/29",
      "time": "7:00",
      "number": 12
  }]

    mockRemoveReservation = jest.fn
    wrapper = shallow(<ReservationsCard 
      {...mockReservation}  
      removeReservation={mockRemoveReservation}
    />)
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})