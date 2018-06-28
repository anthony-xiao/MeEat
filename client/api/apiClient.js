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

export function newRest (rest) {
  console.log(rest)
  return request
    .post('/api/v1/restaurants/')
    .send(rest)
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}
