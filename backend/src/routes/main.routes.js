//all routes will be gathered here
const authRoutes = require('./auth.routes')
const testRoutes = require('./test.routes')

const routes = [
    ...testRoutes,
    ...authRoutes,
]
module.exports = { routes }
