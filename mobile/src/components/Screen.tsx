import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';

type ScreenProps = {
  style: ViewStyle;
  operation: string;
  result?: string;
}

export function Screen({ operation, result, style }: ScreenProps) {

  return (
    <View style={{...styles.container, ...style}}>
      {!result ? (
        <Text style={styles.value}>{operation}</Text>
      ) : (
        <>
          <Text style={styles.value}>{result}</Text>
          <Text style={styles.valueHistory}>{operation}</Text>
        </>
      )}
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingEnd: 20
  },
  value: {
    fontSize: 46,
    color: '#fff',
    fontWeight: 'bold'
  },
  valueHistory: {
    fontSize: 18,
    color: '#eee',
    fontWeight: 'bold'
  }
});
