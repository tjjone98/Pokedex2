import React from 'react';
import {
  Image,
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import {Actions} from 'react-native-router-flux';
function Item({item}) {
  return (
    <View style={{padding: 10}}>
      <TouchableOpacity
        style={style.itemPokemon}
        onPress={() => {
          Actions.detail_pokemon({pokemon: item});
        }}>
        <Image style={{height: 80, width: 80}} source={{uri: item.img}} />
        <Text>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );
}
class ListPokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    return axios
      .get(
        'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json',
      )
      .then(res => {
        this.setState({
          data: res.data.pokemon,
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <View style={style.listPokemon}>
        <FlatList
          numColumns={2}
          keyExtractor={({item}, index) => index.toString()}
          data={this.state.data}
          renderItem={({item}) => <Item item={item} />}
        />
      </View>
    );
  }
}
const style = StyleSheet.create({
  listPokemon: {
    flex: 1,
    alignItems: 'center',
  },
  itemPokemon: {
    flex: 1,
    height: 150,
    width: 150,
    borderWidth: 0.3,
    borderRadius: 4,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});
export default ListPokemon;
