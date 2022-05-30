import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppTabs from './AppTabs';

import ChartTransportistaMes from './ChartTransportistaMes';
import ChartTransportista from './ChartTransportista';


const GridBody = styled(Grid)(({ theme }) => ({
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.mode === 'dark' ? '#131417' : '#fff',
  height: "100vh",
  overflow:'auto'
}));

const GridView = styled(Grid)(({ theme }) => ({
  background:"#1C1D22"
}));


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GridView container >
        <Grid item xs={0} md={2} />
        <GridBody item xs={12} md={8}>
          <AppTabs>
            <ChartTransportistaMes />
            <ChartTransportista />
          </AppTabs>
        </GridBody>
        <Grid item xs={0} md={2} />
      </GridView>


    </ThemeProvider>
  );
};

export default App;