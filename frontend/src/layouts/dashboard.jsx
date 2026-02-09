import * as React from "react";
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  AppBar,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Divider,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import ListAltIcon from "@mui/icons-material/ListAlt";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import HelpIcon from "@mui/icons-material/Help";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LockIcon from "@mui/icons-material/Lock";

const drawerWidth = 240;

function StatCard({ title, value, icon }) {
  return (
    <Card>
      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <Box>
            <Typography variant="body2" color="text.secondary">
              {title}
            </Typography>
            <Typography variant="h4">{value}</Typography>
          </Box>
          {icon}
        </Box>
      </CardContent>
    </Card>
  );
}

function StatusItem({ icon, text, status }) {
  return (
    <Box display="flex" alignItems="center" gap={2} mb={1.5}>
      {icon}
      <Typography flex={1}>{text}</Typography>
      <Chip label={status} color="success" size="small" />
    </Box>
  );
}

export default function App() {
  return (
    <Box sx={{ display: "flex" }}>
      {/* APP BAR */}
      <AppBar position="fixed" sx={{ zIndex: 1201 }}>
        <Toolbar>
          <Typography variant="h6">e-Kinerja Dashboard</Typography>
        </Toolbar>
      </AppBar>

      {/* SIDEBAR */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth },
        }}
      >
        <Toolbar />
        <List>
          <ListItemButton selected>
            <ListItemIcon><DashboardIcon /></ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon><ListAltIcon /></ListItemIcon>
            <ListItemText primary="Aktivitas" />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon><FactCheckIcon /></ListItemIcon>
            <ListItemText primary="Validasi" />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon><HelpIcon /></ListItemIcon>
            <ListItemText primary="Bantuan" />
          </ListItemButton>
        </List>
      </Drawer>

      {/* CONTENT */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />

        <Typography variant="h5" gutterBottom>
          Ringkasan Kinerja Hari Ini
        </Typography>

        {/* STAT CARDS */}
        <Grid container spacing={2} mb={3}>
          <Grid item xs={12} md={3}>
            <StatCard
              title="Total Aktivitas"
              value="12"
              icon={<DashboardIcon fontSize="large" />}
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <StatCard
              title="Disetujui"
              value="9"
              icon={<CheckCircleIcon fontSize="large" />}
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <StatCard
              title="Upload"
              value="3"
              icon={<CloudUploadIcon fontSize="large" />}
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <StatCard
              title="Pending"
              value="2"
              icon={<AccessTimeIcon fontSize="large" />}
            />
          </Grid>
        </Grid>

        {/* STATUS CARD */}
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Status Sistem
            </Typography>
            <Divider sx={{ mb: 2 }} />

            <StatusItem
              icon={<LockIcon />}
              text="Login Berhasil"
              status="OK"
            />
            <StatusItem
              icon={<CheckCircleIcon />}
              text="Sinkronisasi Data"
              status="OK"
            />
            <StatusItem
              icon={<CloudUploadIcon />}
              text="Upload Harian"
              status="OK"
            />
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
