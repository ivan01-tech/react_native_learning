/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {useState} from 'react';
import {
  Button,
  GestureResponderEvent,
  Image,
  ImageBackground,
  Modal,
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
import {RootStackParamList} from '../../App';
import {DrawerScreenProps} from '@react-navigation/drawer';

type AAA = DrawerScreenProps<RootStackParamList>;

const TextInputComp = ({navigation}: AAA) => {
  const [name, _setName] = useState('');
  const [showModal, setModal] = useState(false);
  const onpressHandler = function (e: GestureResponderEvent) {
    console.log('event : ', e.target);
  };
  return (
    <ImageBackground
      source={{
        uri: 'data:image/jpeg;base64,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',
      }}
      blurRadius={1}
      imageStyle={{backgroundColor: '#00000080'}}>
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
      <View style={{width: 100, height: 100}}>
        <Image
          blurRadius={2}
          resizeMode="cover"
          source={require('../../assets/error.jpeg')}
        />
      </View>
      <Modal
        visible={showModal}
        animationType="slide"
        onRequestClose={() => setModal(prev => !prev)}
        transparent>
        <View
          style={{
            backgroundColor: '#00000090',
            width: '100%',
            height: '100%',
            display: 'flex',
            padding: 10,
            paddingTop: 100,
          }}>
          <View
            style={{
              backgroundColor: '#ffffff',
              padding: 10,
            }}>
            <Text>
              {' '}
              Here we go , we must Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptatibus consequuntur voluptatum molestiae
              doloribus magni magnam quas, nesciunt nihil harum, laboriosam sunt
              cum nobis illo ipsam nostrum eum autem laborum. Ullam!
            </Text>
          </View>
        </View>
      </Modal>

      <View style={styles.bodyFlex}>
        <Button
          disabled={false}
          color={'red'}
          title="Show Text"
          onPress={() => {
            setModal(prev => !prev);
            //   Alert.alert(
            //     'Warning !',
            //     'You just clicked the button',
            //     [
            //       {
            //         text: 'OK',
            //         onPress: () => {
            //           console.warn('Alert you clicked ok button');
            //         },
            //       },
            //       {
            //         text: 'cancel',
            //         onPress: () => {
            //           console.warn('Alert you clicked cancel button');
            //         },
            //       },
            //       {
            //         text: 'not sure at all',
            //         onPress: () => {
            //           console.warn('Alert you not sure btn ok button');
            //         },
            //       },
            //     ].reverse(),
            //     {
            //       cancelable: true,
            //       onDismiss: () => {
            //         console.warn('Alert');
            //       },
            //     },
            //   );
          }}
        />

        <TouchableOpacity
          style={styles.button}
          disabled={false}
          activeOpacity={0.5}
          onPress={() => {
            // to be able to set the position of the button
            ToastAndroid.showWithGravityAndOffset(
              'Press button showWithGravity',
              ToastAndroid.LONG,
              ToastAndroid.TOP,
              25,
              50,
            );
          }}>
          <Text style={styles.text}>{'TouchableOpacity'}</Text>
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
          onPress={_e => {
            navigation.toggleDrawer();
          }}>
          <View style={styles.button}>
            <Text>{' TouchableHighlight '}</Text>
          </View>
        </TouchableWithoutFeedback>
        <Text style={styles.text}>{name}</Text>
      </View>
    </ImageBackground>
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
