const Base = require('./Base')

Base.init({ table: 'files'}) // inicia o Base

module.exports = {
    ...Base,
}

    // async delete(id) {

    //     //tentar
    //     try {
    //         const result = await db.query(`SELECT * FROM files WHERE id = $1`, [id])
    //         const file = result.rows[0]
    //         //path = caminho  
    //         fs.unlinkSync(file.path)

    //         return db.query(`
    //                  DELETE FROM  files WHERE id = $1
    //             `, [id])

    //         //pegar   
    //     } catch (err) {
    //         console.error(err)
    //     }

    // }





