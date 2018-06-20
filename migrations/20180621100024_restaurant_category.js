exports.up = (knex, Promise) => {
  return knex.schema.createTable('restaurant_category', table => {
    table.increments('id').primary()
    table.integer('restaurant_id')
    table.integer('category_id')
  }

  )
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('restaurant_category')
}
