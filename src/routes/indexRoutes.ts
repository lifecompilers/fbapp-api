import { Router } from 'express'
import pingRoutes from './siteHealthRoutes'
import userRoutes from './userRoutes'
import passport from 'passport'
import { jwtStrategy } from '../helpers/jwtHelper'

const routes = Router()

passport.use(jwtStrategy);

routes.get("/protected", passport.authenticate('jwt', { session: false }), (req, res) => {
    return res.status(200).send("YAY! this is a protected Route")
})

routes.use('/sitehealth', pingRoutes)
routes.use('/users', userRoutes)

export default routes