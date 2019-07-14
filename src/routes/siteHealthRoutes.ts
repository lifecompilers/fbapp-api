import { Router } from 'express'

const routes = Router()

routes.get('/ping', (_req, res) => res.send({ message: 'pong' }))

export default routes