import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SeleccionaMesInput({
    meses,
    setMeses
}) {

  const handleChange = (event) => {
    const auxMeses = meses.map(mes => ({...mes, selected: false}));
    const value = event.target.value;
    const target = meses.findIndex(mes => mes.id === value);
    auxMeses[target].selected = true;
    debugger;
    setMeses(auxMeses);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Mes</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={meses.filter(item=>item.selected).id}
          label="Age"
          onChange={handleChange}
        >
          
          {meses.map(item=>(
               <MenuItem value={item.id}>{item.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}