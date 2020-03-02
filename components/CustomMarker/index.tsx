import React , {SFC}from 'react'
import { Marker } from 'react-native-maps';

interface Props {
    lat: any,
    lng: any,
    title:string
}

const CustomMarker:SFC<Props> = ({lat, lng, title}) => {

    let coordinates = { latitude: lat,
        longitude: lng}

    return (
        <Marker coordinate={coordinates} title={title} />
    )
}

export default CustomMarker