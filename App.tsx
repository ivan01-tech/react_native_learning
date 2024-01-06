/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, View, StatusBar, Text, Pressable} from 'react-native';
import TextInputComp from './src/components/Input';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screen, ScreenStackProps} from 'react-native-screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {PaperProvider} from 'react-native-paper';
import ScreenA from './src/screen/ScreenA';
import ScreenB from './src/screen/ScreenB';
import {createMaterialBottomTabNavigator} from 'react-native-paper/react-navigation';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  DrawerHeaderProps,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {connectToDatabase, createTables} from './src/db/db';
import Login from './src/screen/Login';

//=========================
const Separator = () => <View style={styles.separator} />;
export type RootStackParamList = {
  Login: undefined;
  ScreenA: {userId: string};
  ScreenB: {name: string};
};

type RootTabParamList = {
  ScreenC: undefined;
  ScreenD: undefined;
};
const Tab = createBottomTabNavigator<RootStackParamList>();
export type PropsA = NativeStackScreenProps<RootStackParamList>;
export type PropsB = NativeStackScreenProps<RootStackParamList>;
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
const TabTop = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator<RootStackParamList>();
// export type DrawerTypeParams = DrawerHeaderProps<RootStackParamList>
// const ScreenC = function () {
//   const {n}
//   return (
//     <View style={styles.body}>
//       <Text style={styles.title}>Screen C</Text>
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

const App = () => {
  const [stopIndicator, setstopIndicator] = useState<boolean>(false);

  const loadData = useCallback(async () => {
    try {
      const db = await connectToDatabase();
      await createTables(db);
      console.log('db created : ', db);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

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
          <Stack.Screen name="Login" component={TextInputComp} />
        </Stack.Navigator> */}
        <Drawer.Navigator
          initialRouteName="Login"
          screenOptions={({navigation, route}) => ({
            drawerPosition: 'left',
            swipeEdgeWidth: 120,
            drawerType: 'front',
            swipeEnabled: false,
            headerStyle: {
              backgroundColor: 'brown',
            },
            headerTintColor: '#eee',
            overlayColor: '#00000090',
            headerTitleAlign: 'center',
            drawerStyle: {
              backgroundColor: '#456DE3',
            },
            drawerIcon({color, focused}) {
              let iconName = '';
              switch (route.name) {
                case 'Login':
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
          })}
          // screenOptions={({route}) => ({
          //   tabBarIcon({color, focused}) {
          //     let iconName = '';
          //     switch (route.name) {
          //       case 'Login':
          //         iconName = 'image';
          //         break;
          //       case 'ScreenA':
          //         iconName = 'user';
          //         break;
          //       case 'ScreenB':
          //         iconName = 'id-card';
          //         break;
          //       default:
          //         iconName = 'user-doctor';
          //         break;
          //     }
          //     return (
          //       <FontAwesome5
          //         color={focused ? 'red' : 'blue'}
          //         size={focused ? 20 : 20}
          //         name={iconName}
          //       />
          //     );
          //   },
          //   tabBarLabelStyle: {
          //     // color: '#00000090',
          //     // color: '#00000090',
          //     fontWeight: '900',
          //     fontSize: 15,
          //     // backgroundColor: '#456DE3',
          //   },
          //   tabBarShowIcon: false,
          //   tabBarActiveBackgroundColor: 'royalblue',
          //   tabBarActiveTintColor: 'white',
          //   tabBarInactiveTintColor: '#00000090',
          // })}
          // barStyle={{
          //   backgroundColor: '#456DE320',
          // }}
          // inactiveColor="#00000090"
          // activeColor="orange"
        >
          <Drawer.Screen
            name="ScreenA"
            // options={{tabBarBadge: 2}}
            options={{title: 'Custom Title A'}}
            component={ScreenA}
            initialParams={{userId: '345'}}
          />
          <Drawer.Screen
            name="ScreenB"
            component={ScreenB}
            options={{
              header: () => null,
            }}
            initialParams={{name: 'Ivan '}}
          />
          <Drawer.Screen name="Login" component={Login} />
        </Drawer.Navigator>
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
