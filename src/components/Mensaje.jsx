import * as React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import FormControlLabel from '@mui/material/FormControlLabel';

const icon = (
  <Paper sx={{ m: 1, width: 100, height: 100 }} elevation={500}>
    <div>perro</div>
  </Paper>
);

export  function SimpleSlide({mostrar}) {
  return (
    <Box
      sx={{
        height: 180,
        width: 130,
        position: 'relative',
        zIndex: 1,
      }}
    >
      <Slide direction="up" in={mostrar} mountOnEnter unmountOnExit>
        {icon}
      </Slide>
    </Box>
  );
}
