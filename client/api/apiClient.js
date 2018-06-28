import request from 'superagent'

export function allRest () {
  return request
    .get('/api/v1/restaurants/RestaurantsList')
    .then(rest => {
      return rest.body
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}

export function newRest (Rest) {
  return request
    .post('/api/v1/restaurants/')
    .send(Rest)
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}




