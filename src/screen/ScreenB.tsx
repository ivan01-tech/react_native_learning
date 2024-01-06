import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const ScreenB = () => {
  const {navigate} = useNavigation();

  return (
    <View style={styles.body}>
      <Text style={styles.title}>Screen B </Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
        consequuntur placeat nemo sunt ea nisi reiciendis temporibus aut
        praesentium corrupti officiis deleniti expedita recusandae fugiat, quas
        minima atque provident consectetur.
      </Text>
      <Pressable
        android_ripple={{color: '#fff'}}
        style={styles.button}
        onPress={() => {
          navigate('ScreenA');
        }}>
        <Text>Got to the screen A</Text>
      </Pressable>
    </View>
  );
};

export default ScreenB;

const styles = StyleSheet.create({
  text1: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    display: 'flex',
    margin: 10,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {},
  container1: {
    flex: 1,
    backgroundColor: 'blue',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  monBouton: {
    backgroundColor: 'blue',
    width: 200,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texteBouton: {
    color: 'white',
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  view_btn: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  body: {backgroundColor: '#AEAE', alignItems: 'center'},
  button: {
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    margin: 'auto',
  },
});
