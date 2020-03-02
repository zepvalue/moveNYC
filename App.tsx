import React, {useState, useMemo} from 'react';
import { StyleSheet, Text, View, Dimensions  } from 'react-native';
import MapView from 'react-native-maps';
import data from './data/locations.json'
import  CustomMarker from './components/CustomMarker'

interface Props {
    region: any,
    onRegionChange: Function
}

const markers = data.features.map((feature ,index) => {
  const name = feature.properties.name
  const lat = feature.geometry.coordinates[0]
  const lng = feature.geometry.coordinates[1]

return ( <CustomMarker 
      key = {"marker" + index} 
      lat={lat} 
      lng={lng} 
      title={name} />
    )
  }
)

const App:React.FC<Props> = () => {

  const NYC = { 
    latitude: 74.0060,
    longitude: 40.7128,
    latitudeDelta: 0.0043,
    longitudeDelta: 0.0034}

  const [region, setRegion] = useState(NYC)
  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle} region={region} onRegionChange={setRegion}>
        {markers}
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

