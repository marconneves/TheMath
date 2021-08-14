import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, SafeAreaView, Text, View, Button } from 'react-native';

export default function App() {
  const [ activeResponse, setActiveResponse ] = useState(false);

  function result(){
    setActiveResponse(!activeResponse);
  }

  return (
    <View style={styles.application}>
      <StatusBar style='auto' />
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1, backgroundColor: '#afa'}} />
        <View style={styles.valueScream}>
          {activeResponse ? <Text style={styles.value}>200+123</Text> : (
            <>
              <Text style={styles.value}>323</Text>
              <Text style={styles.valueHistory}>200+123</Text>
            </>
          )}
        </View>
        <View style={{ flex: 17, backgroundColor: '#faa' }}>
          <Button onPress={result} title="Get Result" />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  application: {
    flex: 1,
    backgroundColor: '#292929'
  },
  container: {
    flex: 1,
    backgroundColor: '#292929'
  },
  valueScream: {
    flex: 10,
    backgroundColor: '#ffa',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingEnd: 20
  },
  value: {
    fontSize: 46,
    color: '#292929',
    fontWeight: 'bold'
  },
  valueHistory: {
    fontSize: 18,
    color: '#292929',
    fontWeight: 'bold'
  }
});
