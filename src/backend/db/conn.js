const mongoose = require('mongoose');
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

const conectaDb = async () => {
    try {
        await mongoose.connect(process.env.DB_STRING, clientOptions);
        await mongoose.connection.db.admin().command({ ping: 1 });
        } catch (err) {
        console.error(err);
    }
}

module.exports = conectaDb