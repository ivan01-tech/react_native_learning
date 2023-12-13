import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

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
  {
    title: function () {
      return `Item ${this.id}`;
    },
    id: 11009888,
  },
  {
    title: function () {
      return `Item ${this.id}`;
    },
    id: 90,
  },
  {
    title: function () {
      return `Item ${this.id}`;
    },
    id: 100789,
  },
  {
    title: function () {
      return `Item ${this.id}`;
    },
    id: 17890,
  },
  {
    title: function () {
      return `Item ${this.id}`;
    },
    id: 2432,
  },
  {
    title: function () {
      return `Item ${this.id}`;
    },
    id: 4012311,
  },
  {
    title: function () {
      return `Item ${this.id}`;
    },
    id: 8123,
  },
  {
    title: function () {
      return `Item ${this.id}`;
    },
    id: 109311,
  },
  {
    title: function () {
      return `Item ${this.id}`;
    },
    id: 110011,
  },
  {
    title: function () {
      return `Item ${this.id}`;
    },
    id: 9022,
  },
  {
    title: function () {
      return `Item ${this.id}`;
    },
    id: 1001,
  },
];
type Props = {
  items?: typeof Items;
};

const FlexBox = ({}: Props) => {
  return (
    <>
      <View style={styles.body}>
        <Text>Flex Box Example</Text>
      </View>
      <ScrollView>
        <View style={styles.bodyFlex}>
          {Items.map(item => (
            <View style={styles.textView} key={item.id}>
              <Text style={styles.text}>{item.title()}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#AEAE',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 10,
    borderWidth: 10,
    gap: 10,
    borderColor: 'pink',
  },
  bodyFlex: {
    alignItems: 'center',
    display: 'flex',
    marginTop: 10,
    gap: 10,
  },
  textView: {
    padding: 10,
    width: '90%',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'red',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default FlexBox;
