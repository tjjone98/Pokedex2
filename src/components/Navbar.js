import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
class Navbar extends React.Component {
  render() {
    return (
      <View style={style.navbar}>
        <Text style={style.title}>Pokedex</Text>
        <Text style={style.author}>One product by tjjone98</Text>
      </View>
    );
  }
}
const style = StyleSheet.create({
  navbar: {
    height: 50,
    justifyContent: 'center',
    borderWidth: 0.2,
    borderRadius: 2,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    color: 'gray',
  },
  author: {
    fontSize: 6,
    color: 'gray',
    textAlign: 'center',
  },
});
export default Navbar;
