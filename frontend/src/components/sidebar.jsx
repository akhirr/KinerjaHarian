import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ListAltIcon from "@mui/icons-material/ListAlt";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useLocation } from "react-router-dom";


const drawerWidth = 240;


export default function Sidebar() {
const location = useLocation();


const menus = [
{ text: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
{ text: "Aktivitas Harian", icon: <ListAltIcon />, path: "/aktivitas" },
{ text: "Validasi", icon: <FactCheckIcon />, path: "/validasi" },
];


return (
<Drawer
variant="permanent"
sx={{
width: drawerWidth,
flexShrink: 0,
[`& .MuiDrawer-paper`]: {
width: drawerWidth,
boxSizing: "border-box",
},
}}
>
<Toolbar>
<Typography fontWeight={700}>e‑Kinerja</Typography>
</Toolbar>


<List>
{menus.map((m) => (
<ListItemButton
key={m.text}
component={Link}
to={m.path}
selected={location.pathname === m.path}
>
<ListItemIcon>{m.icon}</ListItemIcon>
<ListItemText primary={m.text} />
</ListItemButton>
))}


<ListItemButton>
<ListItemIcon>
<LogoutIcon />
</ListItemIcon>
<ListItemText primary="Logout" />
</ListItemButton>
</List>
</Drawer>
);
}