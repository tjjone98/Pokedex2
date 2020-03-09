import React, {Component} from 'react';
import {View, Text} from 'react-native';

class ItemPokemon extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.item.title}</Text>
      </View>
    );
  }
}
export default ItemPokemon;
