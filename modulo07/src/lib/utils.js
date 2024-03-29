module.exports = {
   
    date(timestamp) {
        const date = new Date(timestamp)

        //yyyy
        const year = date.getFullYear()
        //mm
        const month = `0${date.getMonth() + 1}`.slice(-2)
        //dd
        const day = `0${date.getDate()}`.slice(-2)
        //return yyyy-mm-dd
        const hour = date.getHours()
        const minutes = date.getMinutes()
        return {
            day,
            month,
            year,
            hour,
            minutes,
            iso: `${year}-${month}-${day}`,
            birthDay: `${day}/${month}/${year}`
        }
    }, 
    formatPrice(price) {
            // formato em real
            return new Intl.NumberFormat('pt-BR', { // formato do brasil
                style: 'currency', // 1 = 1.000
                currency: 'BRL'    // R$
            }).format(price/100)
    }
}