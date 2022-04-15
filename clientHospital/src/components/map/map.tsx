import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import { Google } from "@mui/icons-material";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const useStyles = makeStyles(theme => ({
    mapContainer: {
        height: "85vh",
        width: "100%",
    },
}));

export default function Map() {
    const classes = useStyles();
    return (
        <Box className={classes.mapContainer}>

            <MapContainer center={[51.505, -0.09]} zoom={13}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
            </MapContainer>

        </Box>
    );
}