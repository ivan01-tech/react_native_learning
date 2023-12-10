import React, {useState} from 'react';
import {Image, RefreshControl, Text, View} from 'react-native';
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
  },
  {
    title: function () {
      return `Item ${this.id}`;
    },
    id: 2,
  },
  {
    title: function () {
      return `Item ${this.id}`;
    },
    id: 40123,
  },
  {
    title: function () {
      return `Item ${this.id}`;
    },
    id: 8,
  },
  {
    title: function () {
      return `Item ${this.id}`;
    },
    id: 10937890,
  },
];

function ScrollViewComp({}: Props) {
  const [Refreshing, setRefreshing] = useState<boolean>(false);
  return (
    <ScrollView
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
    </ScrollView>
  );
}

export default ScrollViewComp;
