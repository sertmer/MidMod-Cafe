import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should update state when addReservation is invokes', () => {
    const mockReservation = {
      name: 'bob',
      date: '12-12-12',
      time: '12:00',
      number: 1
    }

    expect(wrapper.state()).toEqual({reservations: []})

    wrapper.instance().addReservation(mockReservation)

    expect(wrapper.state('reservations')).toEqual([mockReservation])
  })
})