import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import { ConectarApiGet } from '../../shared/functions/conectarAPI';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

const Home = () => {
    const [pedidos, setPedidos] = useState(null);

    useEffect(() => {
        const listaPedidos = async () => {
            try {
                const result = await ConectarApiGet("https://curso-spring-boot-julio.herokuapp.com/pedidos");
                setPedidos(result.data);
            } catch (e) {
                console.log(e);
            }
        }

        listaPedidos();
    },[] );

    if (!pedidos) {
        return (
            <div><CircularProgress /></div>
        )
    }

    return (
        <div>Home</div>
    )
}

export default Home;
