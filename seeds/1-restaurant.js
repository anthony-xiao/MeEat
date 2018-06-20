exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('restaurants').del()
    .then(function () {
      // Inserts seed entries
      return knex('restaurants').insert([
        {id: 1, name: 'test', open_times: '', personal_rating: 5, google_rating: 4, booking_req: true, address: '', city: '', country: '', suburb: ''},
        {id: 2, name: '', open_times: '', personal_rating: 0, google_rating: 0, booking_req: false, address: '', city: '', country: '', suburb: ''},
        {id: 3, name: '', open_times: '', personal_rating: 0, google_rating: 0, booking_req: false, address: '', city: '', country: '', suburb: ''}
      ])
    })
}
