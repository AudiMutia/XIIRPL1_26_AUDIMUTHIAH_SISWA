const mongoose = require("mongoose");

const siswaSchema = new mongoose.Schema({
  NamaLengkap: {
    type: String,
    required: [true, "Silahkan isikan nama siswa"],
    unique: true,
  },
  Sekolah: {
    type: String,
    required: [true, "Silahkan isikan nama sekolah"],
  },
  NIS: {
    type: String,
    required: [true, "Silahkan isikan nomor induk siswa"],
    unique: true
  },
  Jurusan: {
    type: String,
    required: [true, "Silahkan isikan jurusan siswa"],
  },
  Email: {
    type: String,
    required: [true, "Silahkan isikan Email siswa"],
    unique: true

  },
});

module.exports = mongoose.model("siswa", siswaSchema);