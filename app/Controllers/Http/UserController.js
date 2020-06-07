'use strict'

const User = use('App/Models/User')

class UserController {
    async index({ view, auth }) {
        return view.render('sign-in')
    }

    async register({ request, response }) {

        const user = new User()
        user.username = request.input('username_register')
        user.email = request.input('email_register')
        user.password = request.input('password_register')

        await user.save()

        return response.redirect('/')

        
    }

    async login({ request, auth, response }) {
        await auth.logout()

        const email = request.input('email_login')
        const password = request.input('password_login')
        await auth.attempt(email, password)

        return response.redirect('/all')
    }

    async logout({ auth, response }) {
        await auth.logout()

        return response.redirect('/')
    }
}

module.exports = UserController
