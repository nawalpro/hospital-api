import React from "react";
import { makeStyles } from "@material-ui/core";
import { Google } from "@mui/icons-material";
import GoogleMapReact from "google-map-react";

const useStyles = makeStyles(theme => ({
    mapContainer: {
        height: "85vh",
        width: "100%",
    },
}));

export default function Map({ center, zoom, children }) {
    const classes = useStyles();
    return (
        <Box className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyD-9tCzvFiqfqr3vnQ6QZpQZpQZpQZpQZp" }}
                defaultCenter={center}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={{
                    disableDefaultUI: true,
                    zoomControl: true,
                }}
            ></GoogleMapReact>

        </Box>
    );
}