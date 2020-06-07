'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class AuthControl {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ response, auth }, next) {

    try {
      await auth.check()
    } catch (error) {
      return response.route('/')
    }
    // call next to advance the request
    await next()
  }
}

module.exports = AuthControl
