const { body, validationResult } = require('express-validator');
const db = require("../database/models");
const Event = db.Event;


const store = async (req, res) => {
    try {
        const { tittle, image, date, location, description } = req.body;
        // Lakukan validasi atau operasi lainnya sebelum membuat data event
        const save = await Event.create({ tittle, image, date, location, description });
        res.json({ status: 200, message: 'Success', data: save });
    } catch (error) {
        console.error(error); // Tampilkan kesalahan di konsol server
        res.status(500).json({ status: 500, message: 'Internal Server Error' });
    }
};

// READ: Menampilkan atau mengambil semua data dari tabel artikel
const index = async (req, res) => {
    try {
        const result = await Event.findAll({ attributes: ['tittle', 'image', 'date', 'location', 'description'] });
        res.json({ status: 200, message: 'Success', data: result });
    } catch (error) {
        res.json({ status: 422, message: 'Error', error: error.message });
    }
}


// READ: Mengambil data berdasarkan id
const show = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Event.findByPk(id, { attributes: ['tittle', 'image', 'date', 'location', 'description'] });
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
        const event = await Event.findByPk(id);
        if (event) {
            const { tittle, image, date, location, description } = req.body;
            await event.update({ tittle, image, date, location, description });
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
        const kategori = await Event.findByPk(id);
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
