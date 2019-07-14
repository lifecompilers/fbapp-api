import { Router } from 'express'
import pingRoutes from './siteHealthRoutes'

const routes = Router()

routes.use('/sitehealth', pingRoutes)

export default routes
