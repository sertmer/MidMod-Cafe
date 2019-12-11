import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe('Form', () => {
  let wrapper
  let mockEvent
  let mockDefaultState
  let mockUpdatedState
  let mockAddReservation
  let mockHandleChange
  beforeEach(() => {
    mockEvent = { target: { name: 'name', value: 'bob' } }
  
    mockDefaultState = {
      name: '',
      date: '',
      time: '',
      number: 1
    }
  
    mockUpdatedState = {
      name: 'bob',
      date: '',
      time: '',
      number: 1
    }

    mockAddReservation = jest.fn()

    wrapper = shallow(<Form addReservation={mockAddReservation}/>)

  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should update state when handleChange is invoked', () => {
    
    expect(wrapper.state()).toEqual(mockDefaultState)

    wrapper.instance().handleChange(mockEvent)
    expect(wrapper.state()).toEqual(mockUpdatedState)
  })

  it('should call addReservation on button click', () => {
    wrapper.find('button').simulate('click', mockEvent)
    expect(wrapper.instance().props.addReservation).toHaveBeenCalledWith(mockDefaultState)
  })

  it('should call handleChange when it detects a change on a form', () => {
    wrapper.instance().handleChange = jest.fn()
    wrapper.instance().forceUpdate()
    wrapper.find('.name-input').simulate('change', mockEvent)
    expect(wrapper.instance().handleChange).toHaveBeenCalledWith(mockEvent)
  })
})