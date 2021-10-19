const Base = require('./Base')

Base.init({ table: 'categories'}) // inicia o Base

module.exports = {
    ...Base,
}