import React from 'react';
import MapView from 'react-native-maps'; 
import { StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
 container: {
   ...StyleSheet.absoluteFillObject,
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});

export default () => (
   <View style={styles.container}>
     <MapView
       style={styles.map}
       region={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
     </MapView>
   </View>
);