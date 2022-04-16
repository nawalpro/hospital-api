import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import { Google } from "@mui/icons-material";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { LatLngTuple } from 'leaflet';
const useStyles = makeStyles(theme => ({
    mapContainer: {
        height: "85vh",
        width: "100%",
    },
}));

 const LeafletMap:React.FC = () => {
    const classes = useStyles();
    return (
        <MapContainer >

            

        </MapContainer>
    );
}

export default LeafletMap;