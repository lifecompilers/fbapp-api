import { Router } from 'express'
import { listAllUsers, login, createNewUser } from '../controllers/userController';

const routes = Router()

routes.get('/getall', listAllUsers)
routes.post('/login', login)
routes.post('/signup', createNewUser)

export default routes