'use strict'

class FollowController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }
}

module.exports = FollowController
