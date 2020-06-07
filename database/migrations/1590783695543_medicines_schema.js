'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MedicinesSchema extends Schema {
  up () {
    this.create('medicines', (table) => {
      table.increments()
      table.string('code')
      table.string('medicine')
      table.string('piece')
      table.string('recipient')
      table.string('for_whom')
      table.date('date')
      table.string('description')
      table.integer('user_id').unsigned().index('user_id')
      table.foreign('user_id').references('users.id').onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('medicines')
  }
}

module.exports = MedicinesSchema
