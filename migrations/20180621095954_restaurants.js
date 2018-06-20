exports.up = (knex, Promise) => {
  return knex.schema.createTable('restaurants', table => {
    table.increments('id').primary()
    table.string('name')
    table.string('open_times')
    table.integer('personal_rating')
    table.integer('google_rating')
    table.boolean('booking_req')
    table.string('address')
    table.string('city')
    table.string('country')
    table.string('suburb')
    table.string('google_url')
    table.string('website')
  }

  )
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('restaurants')
}
