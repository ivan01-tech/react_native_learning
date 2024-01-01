import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

// type Props = {};

const StyleSheetApp = () => {
  return (
    <View style={styles.body}>
      <Text>StyleSheet</Text>
      <Button title="Change the name" />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#AEAE',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    borderWidth: 10,
    gap: 10,
    borderColor: 'pink',
    height: 150,
  },
  button: {
    padding: 10,
    backgroundColor: 'red',
    width: 500,
  },
});

export default StyleSheetApp;
