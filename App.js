import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style = {styles.carContainer}>

        <View style = {styles.title}>
          <Text style = {styles.mainTitle}>Model S</Text>
          <Text style = {styles.subTitle}>Starting from $69,000</Text>
        </View>

      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
   
  },

  carContainer :{
    width : '100%',
    height: '100%',
  },

  title :{
    marginTop : '30%',
    width : '100%',
    alignItems : 'center',
  },
 
  mainTitle: {
    fontSize : 40,
    fontWeight : '500',
  },

  subTitle : {
    fontSize :16,
    color : '#5c5e62',
  }

});
