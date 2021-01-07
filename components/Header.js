import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    // color: '#ffffff',
    color: '#FF0000',
    fontSize: 23,
    textAlign: 'center',
  },
});

export default Header;
