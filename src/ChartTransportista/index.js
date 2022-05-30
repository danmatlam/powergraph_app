import React, { useEffect, useState } from 'react'
import data_filtrada from '../DataSets/data_filtrada';
import SelectTransportistaInput from './SelectTransportistaInput';
import _ from 'lodash';
import Chart from './Chart';
import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { JSONTree } from 'react-json-tree';

const init = {
    data_set: data_filtrada,
}

const months = [
    'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
]

const avaiableTransportistas = () => {
    let transportistas = _.uniqBy(init.data_set, 'transport_code').map(item => (
        { id: item.transport_code, name: item.transport_code, selected: false }
    ));
    transportistas[0].selected = true;
    return transportistas;
};

const parseMonth = (data) => data.map(item => ({ ...item, mes: months[parseInt(item.mes) - 1] }));


const ChartGrid = styled(Grid)(({ theme }) => ({
    background: "#1C1D22",
    borderRadius: '9pt',
    overflow: 'hidden',
    padding: '1em',
    gap: '1em',
}));


const ChartTransportista = () => {
    const [payload, setPayload] = useState(init.data_set);
    const [transportistas, setTransportistas] = useState(avaiableTransportistas());


    useEffect(() => {
        const currTransportista = transportistas.find(item => item.selected).id;
        const auxPayload = data_filtrada.filter(item => parseInt(item.transport_code) === parseInt(currTransportista));
        setPayload(auxPayload);
    }, [transportistas]);



    return (
        <ChartGrid container spacing={0}>
            <Grid item xs={12}>
                <Typography variant="h5" component="div">
                    Filtre la producción por transportista
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <SelectTransportistaInput
                    transportistas={transportistas}
                    setTransportistas={setTransportistas}
                />
            </Grid>
            <Grid item xs={12}>
                <Chart data={parseMonth(payload)} />
            </Grid>
        </ChartGrid>
    )
};

export default ChartTransportista;