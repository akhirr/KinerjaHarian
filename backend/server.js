import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import pkg from 'pg';

dotenv.config();

const { Pool } = pkg;

const app = express();

app.use(cors());
app.use(express.json());

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// ================= LOGIN =================
app.post('/api/login', async (req, res) => {
  const { nip, password } = req.body;

  try {
    const result = await pool.query(
      'SELECT * FROM "user" WHERE nip = $1',
      [nip]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({ message: 'NIP tidak ditemukan' });
    }

    const user = result.rows[0];

    if (user.password !== password) {
      return res.status(401).json({ message: 'Password salah' });
    }

    res.json({
      message: 'Login berhasil',
      user: {
        id: user.id,
        nip: user.nip
      }
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server running di http://localhost:${process.env.PORT}`);
});
