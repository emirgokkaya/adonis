'use strict'

const Medicine = use('App/Models/Medicine')
const moment = require('../../../public/library/moment/moment')

class FollowController {
    async index({ view }) {
        const medicines = await Medicine.all()

        return view.render('layouts.master', {
            medicines: medicines.toJSON(),
        })
    }

    async create({ request, response }) {
        const medicine = new Medicine()

        medicine.code = request.input('code')
        medicine.medicine = request.input('medicine')
        medicine.piece = request.input('piece')
        medicine.recipient = request.input('recipient')
        medicine.for_whom = request.input('for_whom')
        medicine.date = request.input('date')
        medicine.description = request.input('description')

        await medicine.save()

        response.redirect('/')
    }

    async update({ request, response, params }) {
        const medicine = await Medicine.find(params.id)
        
        medicine.code = request.input('code2')
        medicine.medicine = request.input('medicine2')
        medicine.piece = request.input('piece2')
        medicine.recipient = request.input('recipient2')
        medicine.for_whom = request.input('for_whom2')
        medicine.date = request.input('date2')
        medicine.description = request.input('description2')

        await medicine.save()

        response.redirect('/')
    }

    async destroy({ response, params, session }) {
        const medicine = await Medicine.find(params.id)
        await medicine.delete()
        return response.redirect('/')
    }

    async deleteAll({ view }) {
        await Medicine.query().delete()
        
        return view.render('layouts.master')
    }
}

module.exports = FollowController
