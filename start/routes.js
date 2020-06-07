'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')


Route.get('/', 'UserController.index')

Route.post('/register', 'UserController.register')
Route.get('/register', async ({ response }) => {
    
})

Route.post('/login', 'UserController.login')
Route.get('/login', async ({ response }) => {
    
})

Route.post('/logout', 'UserController.logout').middleware(['control, auth'])
Route.get('/logout', async ({ response }) => {
    
})

Route.get('/all', 'FollowController.index').middleware(['control, auth'])

Route.post('/all/medicine-add', 'FollowController.create').middleware(['control, auth'])
Route.get('/all/medicine-add', async ({ response }) => {
    
})

Route.delete('/all/deleteAll', 'FollowController.deleteAll').middleware(['control, auth'])
Route.get('/all/deleteAll', async ({ response }) => {
    
})

Route.put('/all/medicine-update/:id', 'FollowController.update').middleware(['control, auth'])
Route.get('/all/medicine-update/:id', async ({ response }) => {
    
})

Route.delete('/all/:id', 'FollowController.destroy').middleware(['control, auth'])
Route.get('/all/:id', async ({ response }) => {
    
})

