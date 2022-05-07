import { CssBaseline, Grid, List } from '@material-ui/core'
import React, { useEffect } from 'react'
import Header from '../components/Header'


function MapPage() {
    const [type, setType] = React.useState('hopital');
    const [isLoading, setIsLoading] = React.useState([Boolean]);
    const [places, setPlaces] = React.useState([]);
    const [childClicked, setChildClicked] = React.useState(null);
    
//     useEffect(() => {
//         setIsLoading(true);
//         getPlacesData(type).then((data) => {
//         setIsLoading(false)

//     })
// }, [type, setPlaces]);



return (
    <div>
        <CssBaseline />
        <Header />
        <Grid container style={{ width: '100%' }}>
            <Grid xs={12} md={4}>
                {/* < List
                    type={type}
                    setType={(Type) => setType(Type)}
                    clicked={clicked}
                    isLoading={isLoading}
                    places={places}
                /> */}

            </Grid>
            <Grid xs={12} md={8}>
                {/* <Map places={places} clicked={childClicked} /> */}
            </Grid>
        </Grid>
    </div>
)
}

export default MapPage;