import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectTransportistaInput({
    transportistas,
    setTransportistas
}) {

  const handleChange = (event) => {
    const auxData = transportistas.map(transportista => ({...transportista, selected: false}));
    const value = event.target.value;
    const target = transportistas.findIndex(transportista => transportista.id === value);
    auxData[target].selected = true;
    setTransportistas(auxData);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Cod</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={transportistas.filter(item=>item.selected).id}
          label="Age"
          onChange={handleChange}
        >
          
          {transportistas.map(item=>(
               <MenuItem value={item.id}>{item.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}