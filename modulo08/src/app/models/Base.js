const db = require('../../config/db')

function find(filters, table) {
    let query = `SELECT * FROM ${table}`

    if(filters) {
        Object.keys(filters).map(key => {
            //WHERE | OR | AND
            query += ` ${key}`
    
            Object.keys(filters[key]).map(field => {
                query += ` ${field} = '${filters[key][field]}'`
            })
        })
    }   

    return db.query(query)

}

const Base = {
    init({ table }) {
        if (!table) throw new Error('Invalid Paramas')

        this.table = table
    },

    async find(id) {
        const results = await find( { where: { id } }, this.table)
        return results.rows[0]
    },

    async findOne(filters) {
        const results = await find(filters, this.table)
        return results.rows[0]
    },

    async findAll(filters) {
        const results = await find(filters, this.table)
        return results.rows
    },

    async create(fields) { // fields é os campos do formulario = User.create({name: 'Mayk'})
        try {
            let keys = [],
                values = []

            Object.keys(fields).map(key => {
                keys.push(key)
                // values.push(fields[key])
            values.push(`'${fields[key]}'`);

            })

            // Inseri no banco de dados
            const query = `INSERT INTO ${this.table} 
                (${keys.join(',')})
                VALUES (${values.join(',')})
                RETURNING id`
            const results = await db.query(query)
            return results.rows[0].id

        } catch (error) {
            console.error(error);
        }
    },

    async update(id, fields) {
        try {
            let update = []
            
            Object.keys(fields).map(key => {

                //category_id=($1)
                const line = `${key} = '${fields[key]}'`
                update.push(line)
            })

            //let query = "UPDATE  users SET" é igual o de baixo
            let query = `UPDATE ${this.table} SET
            ${update.join(',')} WHERE id = ${id}`

            await db.query(query)
            return          

        } catch (error) {
            console.error(error)
        }
    },

    delete(id) {
        return db.query(`DELETE FROM ${this.table} WHERE id = $1`, [id])
    }
}

module.exports = Base