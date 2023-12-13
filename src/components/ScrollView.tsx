/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {
  FlatList,
  Image,
  RefreshControl,
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {ScrollView} from 'react-native';
type Props = {};

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64,
};

const Items = [
  {
    title: function () {
      return `Item ${this.id}`;
    },
    id: 1,
    key: 1,
  },
  {
    title: function () {
      return `Item ${this.id}`;
    },
    id: 2,
    key: 2,
  },
  {
    title: function () {
      return `Item ${this.id}`;
    },
    id: 40123,
    key: 40123,
  },
  {
    title: function () {
      return `Item ${this.id}`;
    },
    id: 8,
    key: 8,
  },
];

function ScrollViewComp({}: Props) {
  const [Refreshing, setRefreshing] = useState<boolean>(false);
  return (
    <>
      <FlatList
        data={Items}
        numColumns={2}
        keyExtractor={(item, idth) => item.title + idth.toString()}
        renderItem={({item}) => (
          <View style={styles.text1}>
            <Text>{item.title()}</Text>
          </View>
        )}
      />
      {/* <SectionList key={}   /> */}

      {/* <ScrollView
        refreshControl={
          <RefreshControl
            onRefresh={() => {
              setRefreshing(true);

              setTimeout(() => {
                setRefreshing(false);
              }, 1000);
            }}
            refreshing={Refreshing}
          />
        }>
        {Items.map(item => (
          <View key={item.id}>
            <Text>{item.title()}</Text>
          </View>
        ))}

        <Text style={{fontSize: 96}}>Scroll me plz</Text>
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Text style={{fontSize: 96}}>If you like</Text>
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Text style={{fontSize: 96}}>Scrolling down</Text>
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Text style={{fontSize: 96}}>What's the best</Text>
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Text style={{fontSize: 96}}>Framework around?</Text>
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Text style={{fontSize: 80}}>React Native</Text>
      </ScrollView> */}
    </>
  );
}
const styles = StyleSheet.create({
  text1: {
    width: 100,
    height: 20,
    backgroundColor: 'red',
    display: 'flex',
    margin: 10,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ScrollViewComp;
