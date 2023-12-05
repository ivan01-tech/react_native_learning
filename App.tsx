import React from 'react';
import StyleSheetApp from './src/StyleSheet';
// import {Button, Linking, StatusBar, StyleSheet, Text, View} from 'react-native';

function App(): JSX.Element {
  return (
    <>
      <StyleSheetApp />

      {/* <StatusBar barStyle="light-content" backgroundColor="#57446798" />
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
    </>
  );
}

// const styles = StyleSheet.create({
//   body: {backgroundColor: '#AEAE', alignItems: 'center'},
//   button: {
//     padding: 10,
//     display: 'flex',
//     justifyContent: 'center',
//     margin: 'auto',
//   },
// });

export default App;
