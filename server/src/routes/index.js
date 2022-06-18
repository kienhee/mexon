const productRouter = require('./productRouter')
const routes = app => {
    app.use('/api/v1/products', productRouter)

}
module.exports = routes