import React, {useState} from 'react';
import {
  Alert,
  Button,
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

type Props = {};

const TextInputComp = ({}: Props) => {
  const [name, _setName] = useState('');

  const onpressHandler = function (e: GestureResponderEvent) {
    console.log('event : ', e.target);
  };
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

      <View style={styles.bodyFlex}>
        <Button
          disabled={false}
          color={'red'}
          title="Show Text"
          onPress={() => {
            Alert.alert(
              'Warning !',
              'You just clicked the button',
              [
                {
                  text: 'OK',
                  onPress: () => {
                    console.warn('Alert you clicked ok button');
                  },
                },
                {
                  text: 'cancel',
                  onPress: () => {
                    console.warn('Alert you clicked cancel button');
                  },
                },
                {
                  text: 'not sure at all',
                  onPress: () => {
                    console.warn('Alert you not sure btn ok button');
                  },
                },
              ].reverse(),
              {
                cancelable: true,
                onDismiss: () => {
                  console.warn('Alert');
                },
              },
            );
          }}
        />

        <TouchableOpacity
          style={styles.button}
          disabled={false}
          activeOpacity={0.5}
          onPress={() => {
            ToastAndroid.showWithGravityAndOffset(
              'Press button Toast',
              ToastAndroid.LONG,
              ToastAndroid.TOP,
              103,
              201,
            );
          }}>
          <Text style={styles.text}>{' TouchableOpacity '}</Text>
        </TouchableOpacity>

        <TouchableHighlight
          style={styles.button}
          disabled={false}
          underlayColor={'pink'}
          activeOpacity={0.5}
          onPress={onpressHandler}>
          <Text style={styles.text}>{' TouchableHighlight '}</Text>
        </TouchableHighlight>
        <Pressable
          style={styles.button}
          disabled={false}
          onPress={onpressHandler}>
          <Text>Pressable</Text>
        </Pressable>
        <TouchableWithoutFeedback
          disabled={false}
          // underlayColor={'pink'}
          // activeOpacity={0.5}
          onPress={onpressHandler}>
          <View style={styles.button}>
            <Text>{' TouchableHighlight '}</Text>
          </View>
        </TouchableWithoutFeedback>
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
  button: {
    backgroundColor: 'teal',
    padding: 10,
    color: 'white',
    borderRadius: 5,
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
    color: 'white',
    borderRadius: 10,
  },
});

export default TextInputComp;
