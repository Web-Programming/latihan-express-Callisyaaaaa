const mongoose = require("mongoose");

const mahasiswaschema = new mongoose.Schema({
    nama: {
        type: String,
    },
    npm: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    tanggal_lahir: {
        type: Date,
    },
    aktif: {
        type: Boolean,
    }
});



const Mahasiswa = mongoose.model('Mahasiswa', mahasiswaschema);
module.exports = Mahasiswa;

