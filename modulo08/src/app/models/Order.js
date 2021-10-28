const Base = require('./Base')

Base.init({ table: 'orders'}) // inicia o Base

module.exports = {
    ...Base,
}