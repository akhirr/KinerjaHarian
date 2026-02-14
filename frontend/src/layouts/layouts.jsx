import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import Sidebar from "../components/sidebar";


export function DashboardLayout({ title, children }) {
return (
<Box sx={{ display: "flex" }}>
<Sidebar />


<Box sx={{ flexGrow: 1 }}>
<AppBar position="static" elevation={0}>
<Toolbar>
<Typography variant="h6" fontWeight={700}>
{title}
</Typography>
</Toolbar>
</AppBar>


<Box sx={{ p: 3 }}>{children}</Box>
</Box>
</Box>
);
}