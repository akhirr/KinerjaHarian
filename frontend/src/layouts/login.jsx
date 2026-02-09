import {
  Grid,
  Box,
  TextField,
  Button,
  Typography,
  CssBaseline,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo-ekinerja.png";


export default function Login() {
  const nav = useNavigate();
  const [nip, setNip] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // demo login
    if (nip && pass) {
      localStorage.setItem("login", "yes");
      nav("/dashboard");
    } else {
      alert("NIP dan Password wajib diisi");
    }
  };

  return (
    <Grid container sx={{ height: "100vh" }}>
      <CssBaseline />

      {/* ===== LEFT SIDE ===== */}
      <Grid
        item
        xs={12}
        md={5}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f5f6f8",
          px: { xs: 5, md: 25 },
        }}
      >
        <Box textAlign="center">
          <img src={logo} alt="Logo e-Kinerja" style={{ width: 280 }} />

          <Typography variant="h3" fontWeight="bold">
            e-Kinerja <span style={{ color: "#f4b400" }}>Harian</span>
          </Typography>
          <Typography letterSpacing={3} color="text.secondary">
            SALUMPAT SAINDEGE
          </Typography>
        </Box>
      </Grid>

      {/* ===== RIGHT SIDE ===== */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          px: { xs: 2, md: 8 },
        }}
      >
        <Box width="100%" maxWidth={420}>
          <Typography color="primary" fontWeight={700}>
            Selamat Datang
          </Typography>

          <Typography mb={3} color="text.secondary">
            Masuk untuk melanjutkan ke dashboard E-Kinerja Harian Kota
            Padangsidimpuan
          </Typography>

          <Box component="form" onSubmit={handleLogin}>
            <TextField
              fullWidth
              label="Nomor Induk Pegawai (NIP)"
              margin="normal"
              onChange={(e) => setNip(e.target.value)}
            />

            <TextField
              fullWidth
              type="password"
              label="Password"
              margin="normal"
              onChange={(e) => setPass(e.target.value)}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                py: 1.6,
                fontWeight: "bold",
                backgroundColor: "#f4b400",
                "&:hover": { backgroundColor: "#d89c00" },
              }}
            >
              MASUK
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
