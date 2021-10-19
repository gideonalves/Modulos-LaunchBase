const Base = {
    init({ table }) {
        if (!table) throw new Error('Invalid Paramas')

        this.table = table
    }
}


console.log(this);