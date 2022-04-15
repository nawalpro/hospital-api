import RoutePath from './routes/index';
import React from 'react';
import { Container, AppBar, Toolbar, Typography, Button, Grid, Grow } from '@material-ui/core';
import { MapContainer, TileLayer, Marker, Popup } from 'react-@types/leaflet';
function App() {
  return (
    <Container maxWidth="lg">
      <RoutePath />

    </Container>
  )
}

export default App
