const mongoose = require('mongoose')

async function main() {
    await mongoose.connect('mongodb://localhost:27017/db')
    console.log('Database successfully connected');
}

main().catch((error) => console.log(error))

module.exports = mongoose