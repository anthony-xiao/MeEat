exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('restaurant_category').del()
    .then(function () {
      // Inserts seed entries
      return knex('restaurant_category').insert([
        {id: 1, restaurant_id: '1', category_id: '1'},
        {id: 2, restaurant_id: '', category_id: ''},
        {id: 3, restaurant_id: '', category_id: ''}
      ])
    })
}
