import React, { useEffect, useState } from 'react'
import data_filtrada from '../DataSets/data_filtrada';
import SeleccionaMesInput from './SeleccionaMesInput';
import _ from 'lodash';
import Chart from './Chart';
import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const init = {
    meses: [
        { id: 1, name: 'Enero', selected: false },
        { id: 2, name: 'Febrero', selected: false },
        { id: 3, name: 'Marzo', selected: false },
        { id: 4, name: 'Abril', selected: false },
        { id: 5, name: 'Mayo', selected: false },
        { id: 6, name: 'Junio', selected: false },
        { id: 7, name: 'Julio', selected: false },
        { id: 8, name: 'Agosto', selected: false },
        { id: 9, name: 'Septiembre', selected: false },
        { id: 10, name: 'Octubre', selected: false },
        { id: 11, name: 'Noviembre', selected: false },
        { id: 12, name: 'Diciembre', selected: false },
    ],
    data_set: data_filtrada,
}

const avaiableMonts = () => {
    const av_meses_keys = Object.keys(_.groupBy(init.data_set, 'mes')).map(item => parseInt(item));
    let meses_disponibles = init.meses.filter(item => av_meses_keys.includes(item.id));
    meses_disponibles[0].selected = true;
    return meses_disponibles;
};

const CustomGrid = styled(Grid)(({ theme }) => ({
    background: "#1C1D22",
    borderRadius: '9pt',
    overflow: 'hidden',
    padding: '1em',
    gap: '1em',

}));

const ChartTransportistaMes = () => {
    const [payload, setPayload] = useState(init.data_set);
    const [meses, setMeses] = useState(avaiableMonts());


    useEffect(() => {
        const currentMes = meses.find(mes => mes.selected);
        const auxPayload = data_filtrada.filter(item => parseInt(item.mes) === parseInt(currentMes.id));
        setPayload(auxPayload);
    }, [meses]);


    return (
        <div>
            <CustomGrid container spacing={0}>
                <Grid item xs={12}>
                    <Typography variant="h5" component="div">
                      Filtre la producción por mes
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <SeleccionaMesInput
                        meses={meses}
                        setMeses={setMeses}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Chart data={payload} />
                </Grid>
            </CustomGrid>



        </div>
    )
};

export default ChartTransportistaMes