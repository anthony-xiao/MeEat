import request from 'superagent'

export function allRest () {
  return request
    .get('/api/v1/restaurants')
    .then(rest => {
      return rest.body
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.log(err)
    })
}
