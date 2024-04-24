const { body, validationResult } = require('express-validator');
const db = require("../database/models");
const Galeri = db.Galeri;


const store = async (req, res) => {
    try {
        const { image, title, judul, content} = req.body;
        // Lakukan validasi atau operasi lainnya sebelum membuat data event
        const save = await Galeri.create({ image, title, judul, content});
        res.json({ status: 200, message: 'Success', data: save });
    } catch (error) {
        res.json({ status: 422, message: 'Error', error: error.message });
    }
};

// READ: Menampilkan atau mengambil semua data dari tabel artikel

const fetchGaleri = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/v1/galeri");
      // Mengembalikan data yang diterima dari server jika permintaan berhasil
      return response.data;
    } catch (error) {
      // Menangani kesalahan jika permintaan gagal
      throw new Error(error.response.data.message);
    }
  };


// READ: Mengambil data berdasarkan id
const show = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Galeri.findByPk(id, { attributes: ['image', 'title', 'judul', 'content'] });
        const result = data ? { status: 200, message: 'Success', data: data } : { status: 404, message: 'Not found' };
        res.json(result);
    } catch (error) {   
        res.json({ status: 422, message: 'Error', error: error.message });
    }
}

// UPDATE: Merubah data sesuai dengan id yang dikirimkan sebagai params 
const update = async (req, res) => {
    try {
        const id = req.params.id;
        const galeri = await Galeri.findByPk(id);
        if (galeri) {
            const { image, title, judul, content} = req.body;
            await galeri.update({ image, title, judul, content});
            res.json({ status: 200, message: 'Success updated' });
        } else {
            res.json({ status: 404, message: `${id} not found in db` });
        }
    } catch (error) {
        res.json({ status: 422, message: 'Error', error: error.message });
    }
}

// DELETE: Menghapus data sesuai id yang dikirimkan
const destroy = async (req, res) => {
    try {
        const id = req.params.id;
        const kategori = await Galeri.findByPk(id);
        if (kategori) {
            await kategori.destroy();
            res.json({ status: 200, message: 'Success deleted' });
        } else {
            res.json({ status: 404, message: `${id} not found in db` });
        }
    } catch (error) {
        res.json({ status: 422, message: 'Error', error: error.message });
    }
}


module.exports = { 
    fetchGaleri,
    store,  
    index, 
    show, 
    update,
    destroy
 };
