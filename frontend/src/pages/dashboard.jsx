import { Box, Grid, Card, CardContent, Typography, Button, Table, TableHead, TableRow, TableCell, TableBody, Chip } from "@mui/material";
<><Grid container spacing={2} mb={3}>
  {stats.map((s, i) => (
    <Grid item xs={12} md={3} key={i}>
      <Card>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {s.title}
          </Typography>
          <Typography variant="h4" fontWeight={700}>
            {s.value}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  ))}
</Grid><Card>
    <CardContent>
      <Typography variant="h6" mb={2}>
        Aktivitas Terakhir
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Tanggal</TableCell>
            <TableCell>Nama</TableCell>
            <TableCell>Lokasi</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {recent.map((r, i) => (
            <TableRow key={i}>
              <TableCell>{r.tanggal}</TableCell>
              <TableCell>{r.nama}</TableCell>
              <TableCell>{r.lokasi}</TableCell>
              <TableCell>
                <Chip label={r.status} color={statusColor(r.status)} size="small" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CardContent>
  </Card>
</>