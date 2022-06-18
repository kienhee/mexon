const mongoose = require('mongoose')

async function connection() {
    try {
        await mongoose.connect(`mongodb+srv://kienhee:${process.env.PWDB}@cluster0.tuuuw.mongodb.net/mexon`);
        console.log('Kết nối database thành công 🎉');
    } catch (error) {
        console.log(`Kết nối database thất bại 💔 : ${error}`);
    }
}
module.exports = connection