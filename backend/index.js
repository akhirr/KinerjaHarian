import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// =====================
// TEST SERVER
// =====================
app.get('/', (req, res) => {
  res.send('Backend e-Kinerja aktif');
});

// =====================
// LOGIN
// =====================
app.post('/api/login', async (req, res) => {
  const { nip, password } = req.body;

  // VALIDASI INPUT
  if (!nip || !password) {
    return res.status(400).json({
      message: 'NIP dan password wajib diisi',
    });
  }

  try {
    const query = `
      SELECT id, nip, nama
      FROM users
      WHERE nip = $1 AND password = $2
      LIMIT 1
    `;

    const result = await pool.query(query, [nip, password]);

    if (result.rowCount === 0) {
      return res.status(401).json({
        message: 'NIP atau password salah',
      });
    }

    res.status(200).json({
      message: 'Login berhasil',
      user: result.rows[0],
    });
  } catch (error) {
  console.error('LOGIN ERROR DETAIL:', error.message);
  console.error(error);
  res.status(500).json({
    message: 'Server error',
    error: error.message,
  });
}


});

// =====================
// START SERVER
// =====================
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
