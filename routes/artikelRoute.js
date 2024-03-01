const express = require('express');
const router = express.Router();
const artikelController = require('../controllers/artikelController');

// CREATE: Menambahkan data ke dalam tabel artikels
router.post('/api/v1/artikel/', artikelController.create);

// READ: Menampilkan atau mengambil semua data dari tabel artikels
router.get('/api/v1/artikel/', artikelController.findAll);

// READ: Mengambil data berdasarkan id
router.get('/api/v1/artikel/:id', artikelController.findOne);

// UPDATE: Merubah data sesuai dengan id yang dikirimkan sebagai params 
router.put('/api/v1/artikel/:id', artikelController.update);

// DELETE: Menghapus data sesuai id yang dikirimkan
router.delete('/api/v1/artikel/:id', artikelController.delete);

module.exports = router;