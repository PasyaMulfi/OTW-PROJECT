const { body, validationResult } = require('express-validator');
const db = require("../database/models");
const Artikel = db.Artikel;


const store = async (req, res) => {
    try {
        const { image, title, content } = req.body;
        const save = await Artikel.create({ image, title, content });
        res.json({ status: 200, message: 'Success', data: save });
    } catch (error) {
        res.json({ status: 422, message: 'Error', error: error.message });
    }
};

// READ: Menampilkan atau mengambil semua data dari tabel artikel
const index = async (req, res) => {
    try {
        const result = await Artikel.findAll({ attributes: ['image', 'title', 'content'] });
        res.json({ status: 200, message: 'Success', data: result });
    } catch (error) {
        res.json({ status: 422, message: 'Error', error: error.message });
    }
}


// READ: Mengambil data berdasarkan id
const show = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Artikel.findByPk(id, { attributes: ['image', 'title', 'content'] });
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
        const artikel = await Artikel.findByPk(id);
        if (artikel) {
            const { image, title, content } = req.body;
            await artikel.update({ image, title, content });
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
        const kategori = await Artikel.findByPk(id);
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
    store, 
    index, 
    show, 
    update,
    destroy
 };
