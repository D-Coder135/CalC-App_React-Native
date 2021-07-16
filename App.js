import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import Calculator from './components/Calculator';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Calculator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'skyblue',
    // alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    // padding: 8,
  },
});
