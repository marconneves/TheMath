import React from 'react';
import { useState } from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { Keyboard } from './components/Keyboard';
import { Screen } from './components/Screen';

export default function App() {
  const [ result, setResult ] = useState('');
  const [ operation, setOperation ] = useState('');

  function changeResult(newResult: string) {
    setResult(newResult);
  }

  function changeOperation(newResult: string) {
    setOperation(newResult);
  }
  return (
    <View style={styles.application}>
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1 }} />
        <Screen
          style={styles.scream}
          operation={operation}
          result={result}
        />
        <Keyboard
          style={styles.keyboard}
          changeResult={changeResult}
          changeOperation={changeOperation}
        />
        <View style={{flex: 1}}/>
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
  scream: {
    flex: 10
  },
  keyboard: {
    flex: 13
  }
});
