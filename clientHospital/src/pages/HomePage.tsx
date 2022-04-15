import React from 'react'
import { Link } from 'react-router-dom';
import { Container, AppBar, Toolbar, Typography, Button, Grid, Grow } from '@material-ui/core';
import weCare from '../images/weCareBlue.png';
import Login from '../components/logs/login';


export default function HomePage() {
    return (
        <Container maxWidth="lg">
      <AppBar position="static">
        <Typography variant="h2" align='center'>We-Care</Typography>
        <img src={weCare} alt="weCare" height='60' />
      </AppBar>
      <Grow in >
        <Container>
          <Grid container justify= 'space-between' alignItems='stretch' spacing={4} >
              <Grid item xs={12} sm={7}>
                <Typography variant="h4" align='center'>
                    We-Care est une plateform qui connecte les profesionnels de santé au patient.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
              </Grid>
          </Grid>
        </Container>
      </Grow>

    </Container>
    )
}
