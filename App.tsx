/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
import 'react-native-gesture-handler';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React, {useState} from 'react';
import {StyleSheet, View, StatusBar, Text, Pressable} from 'react-native';
import TextInputComp from './src/components/Input';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screen, ScreenStackProps} from 'react-native-screens';
import {
  createBottomTabNavigator,
  useBottomTabBarHeight,
} from '@react-navigation/bottom-tabs';
import {PaperProvider} from 'react-native-paper';
import ScreenA from './src/screen/ScreenA';
import ScreenB from './src/screen/ScreenB';
import {createMaterialBottomTabNavigator} from 'react-native-paper/react-navigation';

const Separator = () => <View style={styles.separator} />;
type RootStackParamList = {
  Home: undefined;
  ScreenA: {userId: string};
  ScreenB: {name: string};
  Profile: {userId: string};
};

type RootTabParamList = {
  ScreenC: undefined;
  ScreenD: undefined;
};
const Tab = createBottomTabNavigator<RootStackParamList>();
type PropsA = NativeStackScreenProps<RootStackParamList>;
type PropsB = NativeStackScreenProps<RootStackParamList, 'ScreenB', 'ScreenA'>;
type PropsTabBottomA = ScreenStackProps;
const Stack = createNativeStackNavigator<RootStackParamList>();

// const ScreenA = function () {
//   const {navigation, route} = useNavigation<PropsA>();
//   return (
//     <View style={styles.body}>
//       <Text style={styles.title}>Screen B </Text>

//       <Text>
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
//         consequuntur placeat nemo sunt ea nisi reiciendis temporibus aut
//         praesentium corrupti officiis deleniti expedita recusandae fugiat, quas
//         minima atque provident consectetur.
//       </Text>

//       <Pressable
//         style={styles.button}
//         android_ripple={{color: '#fff'}}
//         onPress={() => {
//           navigation.navigate('ScreenB', {name: 'Ivan'});
//         }}>
//         <Text>Got to the screen B</Text>
//       </Pressable>
//     </View>
//   );
// };

// const ScreenB = function ({navigation, route}: PropsB) {
//   return (
//     <View style={styles.body}>
//       <Text style={styles.title}>Screen B {route.params.name}</Text>
//       <Text>
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
//         consequuntur placeat nemo sunt ea nisi reiciendis temporibus aut
//         praesentium corrupti officiis deleniti expedita recusandae fugiat, quas
//         minima atque provident consectetur.
//       </Text>
//       <Pressable
//         android_ripple={{color: '#fff'}}
//         style={styles.button}
//         onPress={() => {
//           navigation.navigate('ScreenA', {userId: '1003'});
//         }}>
//         <Text>Got to the screen A</Text>
//       </Pressable>
//     </View>
//   );
// };
const TabMaterail = createMaterialBottomTabNavigator();

const ScreenC = function () {
  const {navigation, route} = useNavigation<PropsB>();
  const {} = useBottomTabBarHeight();

  return (
    <View style={styles.body}>
      <Text style={styles.title}>Screen C</Text>
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

const ScreenD = function () {
  const {navigation, route} = useNavigation<PropsB>();

  return (
    <View style={styles.body}>
      <Text style={styles.title}>Screen D</Text>
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
    <>
      <NavigationContainer>
        {/* <TabMaterail.Navigator>
          <Tab.Screen name="ScreenA" component={ScreenA} />
          <Tab.Screen name="ScreenB" component={ScreenB} />
        </TabMaterail.Navigator> */}
        {/* <Stack.Navigator>
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
        </Stack.Navigator> */}
        <TabMaterail.Navigator
          screenOptions={({route}) => ({
            tabBarIcon({color, focused}) {
              let iconName = '';
              switch (route.name) {
                case 'Home':
                  iconName = 'image';
                  break;
                case 'ScreenA':
                  iconName = 'user';
                  break;
                case 'ScreenB':
                  iconName = 'id-card';
                  break;
                default:
                  iconName = 'user-doctor';
                  break;
              }
              return (
                <FontAwesome5
                  color={focused ? 'red' : 'blue'}
                  size={focused ? 20 : 20}
                  name={iconName}
                />
              );
            },
            tabBarLabelStyle: {
              // color: '#00000090',
              // color: '#00000090',
              fontWeight: '900',
              fontSize: 15,
              // backgroundColor: '#456DE3',
            },
            tabBarActiveBackgroundColor: 'royalblue',
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: '#00000090',
          })}
          barStyle={{
            backgroundColor: '#456DE320',
          }}
          inactiveColor="#00000090"
          activeColor="orange">
          <Tab.Screen
            name="ScreenA"
            options={{tabBarBadge: 2}}
            component={ScreenA}
            initialParams={{userId: '345'}}
          />
          <Tab.Screen
            name="ScreenB"
            component={ScreenB}
            options={{
              header: () => null,
            }}
            initialParams={{name: 'Ivan '}}
          />
          <Tab.Screen name="Home" component={TextInputComp} />
        </TabMaterail.Navigator>
      </NavigationContainer>
      {/* <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerStatusBarHeight: 1,
            tabBarShowLabel: false,
            headerShown: false,
          }}>
          <Tab.Screen name="ScreenC" component={ScreenC} />
          <Tab.Screen name="ScreenD" component={ScreenD} />
          {/* <Tab.Screen name="ScreenC" component={ScreenC} />
        </Tab.Navigator>
      </NavigationContainer> */}
    </>
  );

  // {
  //   /* <SafeAreaView style={styles.container1}> */
  // }
  // {
  //   /* <TextInputComp /> */
  // }
  // {
  //   /* <View style={styles.container}>
  //       <View style={styles.text1}>
  //         <Text>Text1</Text>
  //       </View>

  //       <View style={styles.text1}>
  //         <Text>Text2</Text>
  //       </View>
  //       <View style={styles.text1}>
  //         <Text>Text3</Text>
  //       </View>
  //     </View> */
  // }
  // {
  //   /* <View>
  //         <Text style={styles.title}>
  //           The title and onPress handler are required. It is recommended to set
  //           accessibilityLabel to help make your app usable by everyone.
  //         </Text>
  //         <Button
  //           title="Press me"
  //           onPress={() => Alert.alert('Simple Button pressed')}
  //         />
  //       </View>
  //       <Separator />

  //       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
  //         <TouchableOpacity
  //           style={styles.monBouton}
  //           onPress={() => Alert.alert('Button with adjusted color pressed')}>
  //           <Text style={styles.texteBouton}>Mon Bouton</Text>
  //         </TouchableOpacity>
  //       </View>
  //       <View>
  //         <Text style={styles.title}>
  //           Adjust the color in a way that looks standard on each platform. On
  //           iOS, the color prop controls the color of the text. On Android, the
  //           color adjusts the background color of the button.
  //         </Text>
  //         <Button
  //           title="Press me"
  //           color="#f1945f"
  //           onPress={() => Alert.alert('Button with adjusted color pressed')}
  //         />
  //       </View>
  //       <Separator />
  //       <View>
  //         <Text style={styles.title}>
  //           All interaction for the component are disabled.
  //         </Text>
  //         <View>
  //           <Button
  //             title="Press me"
  //             disabled
  //             onPress={() => Alert.alert('Cannot press this one')}
  //           />
  //         </View>
  //       </View>
  //       <Separator />
  //       <View>
  //         <Text style={styles.title}>
  //           This layout strategy lets the title define the width of the button.
  //         </Text>
  //         <View style={styles.fixToText}>
  //           <Button
  //             title="Left button"
  //             onPress={() => Alert.alert('Left button pressed')}
  //           />
  //           <Button
  //             title="Right button"
  //             onPress={() => Alert.alert('Right button pressed')}
  //           />
  //         </View>
  //       </View>

  //       <View style={{flex: 1, justifyContent: 'center'}}>
  //         <Button
  //           title="Stop Indiacator"
  //           color="blue"
  //           onPress={() => {
  //             setstopIndicator(prev => !prev);
  //           }}
  //         />
  //       </View>

  //       <View style={[styles.container, styles.horizontal]}>
  //         {!stopIndicator ? (
  //           <>
  //             <ActivityIndicator size="large" />
  //             <ActivityIndicator size="small" color="#0000ff" />
  //             <ActivityIndicator size="large" color="#00ff00" />
  //           </>
  //         ) : (
  //           <Text>You stopped it</Text>
  //         )}
  //       </View>

  //       <StyleSheetApp />
  //       <FlexBox />

  //       <StatusBar barStyle="light-content" backgroundColor="#57446798" />
  //       <View>
  //         <View style={styles.body}>
  //           <Text>Hello world !</Text>
  //         </View>
  //         <View style={styles.button}>
  //           <Button
  //             onPress={() => Linking.openURL('https://youtube.com')}
  //             title="Link to the First App"
  //           />
  //         </View>
  //       </View> */
  // }
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
