import React, { useState } from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import TheMath from 'the-math';

type KeyboardProps = {
  style: ViewStyle;
  changeResult: (result: string) => void;
  changeOperation: (result: string) => void;
}

export function Keyboard({ style, changeResult, changeOperation }: KeyboardProps) {
  const [ operation, setOperation ] = useState<string[]>([]);

  function handleResult(){
    let result = TheMath.resolve(operation.join(''));

    changeResult(String(result));
  }

  function handleAC(){
    changeResult('');
    changeOperation('');
    setOperation([]);
  }

  function handleSetNumber(number: string){
    const operationsArray = operation;

    if(isNaN(Number(operationsArray[operationsArray.length - 1]))){
      operationsArray.push(number);
    } else {
      operationsArray[operationsArray.length - 1] = `${operationsArray[operationsArray.length - 1]}${number}`;
    }

    setOperation(operationsArray);
    changeOperation(operationsArray.join(''));
  }

  function handleOperation(operationSelected: string){
    if(isNaN(Number(operation[operation.length - 1]))){
      const operationsArray = operation;

      operationsArray[operationsArray.length - 1] = operationSelected;

      setOperation(operationsArray);
      changeOperation(operationsArray.join(''));
      return;
    }


    const operationsArray = [...operation, operationSelected];

    setOperation(operationsArray);
    changeOperation(operationsArray.join(''));
  }

  return (
    <View style={{...styles.container, ...style}}>
      <View style={grid.line}>
        <RectButton
          style={{
            ...styles.button,
            ...grid.button,
          }}
          onPress={handleAC}
        >
          <Text style={styles.buttonText}>
            AC
          </Text>
        </RectButton>
        <RectButton
          style={{...styles.button, ...grid.button}}
          onPress={handleAC}
        >
          <Text style={styles.buttonText}>
            C
          </Text>
        </RectButton>
        <RectButton
          style={{...styles.button, ...grid.button}}
          onPress={() => handleOperation('/')}
        >
          <Text style={styles.buttonText}>
            /
          </Text>
        </RectButton>
        <RectButton
          style={{...styles.button, ...grid.button}}
          onPress={() => handleOperation('*')}
        >
          <Text style={styles.buttonText}>
            *
          </Text>
        </RectButton>
      </View>
      <View style={{...grid.line}}>
        <RectButton
          style={{
            ...styles.button,
            ...grid.button,
          }}
          onPress={() => handleSetNumber('7')}
        >
          <Text style={styles.buttonText}>
            7
          </Text>
        </RectButton>
        <RectButton
          style={{...styles.button, ...grid.button}}
          onPress={() => handleSetNumber('8')}
        >
          <Text style={styles.buttonText}>
            8
          </Text>
        </RectButton>
        <RectButton
          style={{...styles.button, ...grid.button}}
          onPress={() => handleSetNumber('9')}
        >
          <Text style={styles.buttonText}>
            9
          </Text>
        </RectButton>
        <RectButton
          style={{...styles.button, ...grid.button}}
          onPress={() => handleOperation('-')}
        >
          <Text style={styles.buttonText}>
            -
          </Text>
        </RectButton>
      </View>
      <View style={{...grid.line }}>
        <RectButton
          style={{
            ...styles.button,
            ...grid.button,
          }}
          onPress={() => handleSetNumber('4')}
        >
          <Text style={styles.buttonText}>
            4
          </Text>
        </RectButton>
        <RectButton
          style={{...styles.button, ...grid.button}}
          onPress={() => handleSetNumber('5')}
        >
          <Text style={styles.buttonText}>
            5
          </Text>
        </RectButton>
        <RectButton
          style={{...styles.button, ...grid.button}}
          onPress={() => handleSetNumber('6')}
        >
          <Text style={styles.buttonText}>
            6
          </Text>
        </RectButton>
        <RectButton
          style={{...styles.button, ...grid.button}}
          onPress={() => handleOperation('+')}
        >
          <Text style={styles.buttonText}>
            +
          </Text>
        </RectButton>
      </View>
      <View style={{flex: 2, flexDirection: 'row'}}>
        <View style={{...grid.subBlock }}>
          <RectButton
            style={{
              ...styles.button,
              ...grid.buttonVertical,
            }}
            onPress={() => handleSetNumber('1')}
          >
            <Text style={styles.buttonText}>
              1
            </Text>
          </RectButton>
          <RectButton
            style={{...styles.button, ...grid.buttonVertical}}
            onPress={() => handleSetNumber('0')}
          >
            <Text style={styles.buttonText}>
              0
            </Text>
          </RectButton>
        </View>
        <View style={{...grid.subBlock }}>
          <RectButton
            style={{
              ...styles.button,
              ...grid.buttonVertical,
            }}
            onPress={() => handleSetNumber('2')}
          >
            <Text style={styles.buttonText}>
              2
            </Text>
          </RectButton>
          <RectButton
            style={{...styles.button, ...grid.buttonVertical}}
            onPress={() => handleSetNumber('00')}
          >
            <Text style={styles.buttonText}>
              00
            </Text>
          </RectButton>
        </View>
        <View style={{...grid.subBlock }}>
          <RectButton
            style={{
              ...styles.button,
              ...grid.buttonVertical,
            }}
            onPress={() => handleSetNumber('3')}
          >
            <Text style={styles.buttonText}>
              3
            </Text>
          </RectButton>
          <RectButton
            style={{...styles.button, ...grid.buttonVertical}}
            onPress={() => handleSetNumber('.')}
          >
            <Text style={styles.buttonText}>
              .
            </Text>
          </RectButton>
        </View>
        <View style={{...grid.subBlock }}>
          <RectButton
            style={{
              ...styles.button,
              ...grid.buttonVertical,
            }}
            onPress={handleResult}
          >
            <Text style={styles.buttonText}>
              =
            </Text>
          </RectButton>
        </View>
      </View>
    </View>
  )
}

const grid = StyleSheet.create({
  line: {
    flex: 1,
    flexDirection: 'row',
  },
  subBlock: {
    flex: 1,
    flexDirection: 'column',
  },
  button: {
    flex: 1,
  },
  buttonVertical: {
    flex: 1,
  }
})

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12
  },
  button: {
    backgroundColor: '#34CB79',
    overflow: 'hidden',
    alignItems: 'center',
    margin: 6,
  },
  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontSize: 16,
  }
});
