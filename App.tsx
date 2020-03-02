import React, {useState, useMemo} from 'react';
import { StyleSheet, Text, View, Dimensions  } from 'react-native';
import MapView from 'react-native-maps';
import data from './data/locations.json'
import  CustomMarker from './components/CustomMarker'
import getRegionForCoordinates from './helpers/location'

interface Props {
    region: any,
    onRegionChange: Function
}

const markers = data.features.map(feature => <CustomMarker 
      key = {"marker" + feature.properties.name} lat={feature.geometry.coordinates[0]} 
      lng={feature.geometry.coordinates[1]} 
      title={feature.properties.name} />)

const App:React.FC<Props> = () => {

  const initialLocation = { 
    latitude: 74.0060,
    longitude: 40.7128,
    latitudeDelta: 74.0060,
    longitudeDelta: 40.7128}

  const [region, setRegion] = useState(initialLocation)
  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle} region={region} onRegionChange={setRegion}>
    
        </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default App

