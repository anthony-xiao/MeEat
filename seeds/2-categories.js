exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {id: 1, name: 'test'},
        {id: 2, name: ''},
        {id: 3, name: ''}
      ])
    })
}
