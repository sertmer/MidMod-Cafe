import { getReservations } from './apiCalls'
// no need to import react
// no need to import enzyme
describe('apiCalls', () => {
  describe('getReservations', () => {
    let mockResponse = [
      {
        "id": 1,
        "name": "Christie",
        "date": "12/29",
        "time": "7:00",
        "number": 12
     }
    ];

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => {
            return Promise.resolve(mockResponse)
          }
        })
      })
    })

    it('should be passed the correct URL', () => {
      getReservations()

      expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/reservations')
    })
  })

  it('should return an array of reservations', () => {
    let mockResponse = [
      {
        "id": 1,
        "name": "Christie",
        "date": "12/29",
        "time": "7:00",
        "number": 12
     }
    ];
    expect(getReservations()).resolves.toEqual(mockResponse)
  })
})