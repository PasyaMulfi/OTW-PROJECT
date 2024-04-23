// Mengimpor modul express
const express = require('express')
const app = express()

// Mengimpor modul routes dan CORS
const routes = require('./routes')
const cors = require('cors')

// Mengimpor modul dotenv untuk konfigurasi
require("dotenv").config()

// Konfigurasi CORS untuk mengizinkan akses dari berbagai origin, metode, dan header
const corsOptions = {
    origin: '*', // Mengizinkan akses dari semua origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Mengizinkan metode HTTP yang diizinkan
    allowedHeaders: ['Content-Type', 'Authorization'] // Mengizinkan header yang diizinkan
};

// Menggunakan CORS dan middleware express
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Menggunakan modul routes
app.use(routes);

// Menjalankan server pada port yang diatur dalam file .env
const server = app.listen(process.env.APP_PORT, () => console.log(`API Berjalan di Port ${process.env.APP_PORT}`))

// Menangani sinyal SIGTERM untuk menutup server dengan benar
process.on('SIGTERM', () => {
    console.info('Sinyal SIGTERM diterima.');
    console.log('Menutup server HTTP.');
    server.close(() => {
        console.log('Server HTTP ditutup.');
        process.exit(0);
    });
});