import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppTabs from './AppTabs';

import ChartTransportistaMes from './ChartTransportistaMes';
import ChartTransportista from './ChartTransportista';


const GridBody = styled(Grid)(({ theme }) => ({
  // ...theme.typography.body2,
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.mode === 'dark' ? '#131417' : '#fff',
  height: "100vh",


}));


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Grid container >
        <Grid item xs={1}>

        </Grid>
        <GridBody item xs={10}>
          <AppTabs>
            <ChartTransportistaMes />
            <ChartTransportista />
          </AppTabs>
        </GridBody>
        <Grid item xs={1}>

        </Grid>

      </Grid>


    </ThemeProvider>
  );
};

export default App;