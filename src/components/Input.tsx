import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

type Props = {};

const TextInputComp = ({}: Props) => {
  const [name, _setName] = useState('');
  return (
    <>
      <View>
        <Text style={styles.text}>Please enter somethings.</Text>
      </View>

      <View style={styles.bodyFlex}>
        <TextInput
          onChangeText={_setName}
          placeholder="e.g Doe"
          maxLength={5}
          style={styles.textView}
          secureTextEntry
          editable={false}
        />
      </View>

      <View>
        <Text style={styles.text}>{name}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    justifyContent: 'center',
    marginTop: 10,
    borderWidth: 10,
    backgroundColor: '#FFFFFF',
    gap: 10,
  },
  bodyFlex: {
    alignItems: 'center',
    display: 'flex',
    marginTop: 10,
    gap: 10,
  },
  textView: {
    width: '90%',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    borderRadius: 10,
    backgroundColor: 'white',
  },
});

export default TextInputComp;
