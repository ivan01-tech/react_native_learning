/* eslint-disable @typescript-eslint/no-unused-vars */
import 'react-native-gesture-handler';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  Text,
  Pressable,
} from 'react-native';
import TextInputComp from './src/components/Input';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screen} from 'react-native-screens';

const Separator = () => <View style={styles.separator} />;
type RootStackParamList = {
  Home: undefined;
  ScreenA: {userId: string};
  ScreenB: {name: string};
  Profile: {userId: string};
};
type PropsA = NativeStackScreenProps<RootStackParamList, 'ScreenA'>;
type PropsB = NativeStackScreenProps<RootStackParamList, 'ScreenB'>;
const Stack = createNativeStackNavigator<RootStackParamList>();

const ScreenA = function ({navigation, route}: PropsA) {
  return (
    <View style={styles.body}>
      <Text style={styles.title}>Screen B {route.params.userId}</Text>

      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
        consequuntur placeat nemo sunt ea nisi reiciendis temporibus aut
        praesentium corrupti officiis deleniti expedita recusandae fugiat, quas
        minima atque provident consectetur.
      </Text>

      <Pressable
        style={styles.button}
        android_ripple={{color: '#fff'}}
        onPress={() => {
          navigation.navigate('ScreenB', {name: 'Ivan Silatsa'});
        }}>
        <Text>Got to the screen B</Text>
      </Pressable>
    </View>
  );
};

const ScreenB = function ({navigation, route}: PropsB) {
  return (
    <View style={styles.body}>
      <Text style={styles.title}>Screen B {route.params.name}</Text>
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
          navigation.navigate('ScreenA', {userId: '1003'});
        }}>
        <Text>Got to the screen A</Text>
      </Pressable>
    </View>
  );
};

const App = () => {
  const [stopIndicator, setstopIndicator] = useState<boolean>(false);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ScreenA"
          component={ScreenA}
          initialParams={{userId: '345'}}
        />
        <Stack.Screen
          name="ScreenB"
          component={ScreenB}
          options={{
            header: () => null,
          }}
          initialParams={{name: 'Ivan '}}
        />
        <Stack.Screen name="Home" component={TextInputComp} />
      </Stack.Navigator>
      {/* <SafeAreaView style={styles.container1}> */}
      {/* <TextInputComp /> */}
      {/* <View style={styles.container}>
        <View style={styles.text1}>
          <Text>Text1</Text>
        </View>

        <View style={styles.text1}>
          <Text>Text2</Text>
        </View>
        <View style={styles.text1}>
          <Text>Text3</Text>
        </View>
      </View> */}
      {/* <View>
          <Text style={styles.title}>
            The title and onPress handler are required. It is recommended to set
            accessibilityLabel to help make your app usable by everyone.
          </Text>
          <Button
            title="Press me"
            onPress={() => Alert.alert('Simple Button pressed')}
          />
        </View>
        <Separator />

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.monBouton}
            onPress={() => Alert.alert('Button with adjusted color pressed')}>
            <Text style={styles.texteBouton}>Mon Bouton</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.title}>
            Adjust the color in a way that looks standard on each platform. On
            iOS, the color prop controls the color of the text. On Android, the
            color adjusts the background color of the button.
          </Text>
          <Button
            title="Press me"
            color="#f1945f"
            onPress={() => Alert.alert('Button with adjusted color pressed')}
          />
        </View>
        <Separator />
        <View>
          <Text style={styles.title}>
            All interaction for the component are disabled.
          </Text>
          <View>
            <Button
              title="Press me"
              disabled
              onPress={() => Alert.alert('Cannot press this one')}
            />
          </View>
        </View>
        <Separator />
        <View>
          <Text style={styles.title}>
            This layout strategy lets the title define the width of the button.
          </Text>
          <View style={styles.fixToText}>
            <Button
              title="Left button"
              onPress={() => Alert.alert('Left button pressed')}
            />
            <Button
              title="Right button"
              onPress={() => Alert.alert('Right button pressed')}
            />
          </View>
        </View>

        <View style={{flex: 1, justifyContent: 'center'}}>
          <Button
            title="Stop Indiacator"
            color="blue"
            onPress={() => {
              setstopIndicator(prev => !prev);
            }}
          />
        </View>

        <View style={[styles.container, styles.horizontal]}>
          {!stopIndicator ? (
            <>
              <ActivityIndicator size="large" />
              <ActivityIndicator size="small" color="#0000ff" />
              <ActivityIndicator size="large" color="#00ff00" />
            </>
          ) : (
            <Text>You stopped it</Text>
          )}
        </View>

        <StyleSheetApp />
        <FlexBox />

        <StatusBar barStyle="light-content" backgroundColor="#57446798" />
        <View>
          <View style={styles.body}>
            <Text>Hello world !</Text>
          </View>
          <View style={styles.button}>
            <Button
              onPress={() => Linking.openURL('https://youtube.com')}
              title="Link to the First App"
            />
          </View>
        </View> */}
      {/* </SafeAreaView> */}
    </NavigationContainer>
  );
};

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
  container: {
    marginTop: StatusBar.currentHeight,
  },
  container1: {
    flex: 1,
    backgroundColor: 'blue',
    marginTop: StatusBar.currentHeight,
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

export default App;
