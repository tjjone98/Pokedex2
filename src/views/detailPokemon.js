import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';

class DetailPokemon extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <View style={style.border}>
          <Image style={style.image} source={{uri: this.props.pokemon.img}} />
          <Text style={style.name}>{this.props.pokemon.name}</Text>
          <View style={style.wrapInfo}>
            <View style={style.info}>
              <View style={style.type}>
                <Text style={{flex: 1, textAlign: 'center'}}>Height:</Text>
                <Text style={{flex: 1}}>{this.props.pokemon.height}</Text>
              </View>
              <View style={style.type}>
                <Text style={{flex: 1, textAlign: 'center'}}>Weight:</Text>
                <Text style={{flex: 1}}>{this.props.pokemon.weight}</Text>
              </View>
              <View style={style.type}>
                <Text style={{flex: 1, textAlign: 'center'}}>Candy:</Text>
                <Text style={{flex: 1}}>{this.props.pokemon.candy}</Text>
              </View>
            </View>

            <View style={style.type}>
              <Text style={{flex: 1, textAlign: 'center'}}>Type:</Text>
              <FlatList
                style={{flex: 1}}
                data={this.props.pokemon.type}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => <Text>{item}</Text>}
              />
            </View>

            <View style={style.type}>
              <Text style={{flex: 1, textAlign: 'center'}}>Weaknesses:</Text>
              <FlatList
                style={{flex: 1}}
                data={this.props.pokemon.weaknesses}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => <Text>{item}</Text>}
              />
            </View>

            <View style={style.type}>
              <Text style={{flex: 1, textAlign: 'center'}}>
                Next Evolution:
              </Text>
              <FlatList
                style={{flex: 1}}
                data={this.props.pokemon.next_evolution}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => <Text>{item.name}</Text>}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    alignItems: 'center',
  },
  image: {
    height: 100,
    width: 100,
  },
  border: {
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  wrapInfo: {
    borderWidth: 1,
    borderRadius: 10,
    margin: 4,
    padding: 4,
    borderColor: 'gray',
  },
  info: {
    width: 280,
  },

  type: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4,
    padding: 5,
  },
});
export default DetailPokemon;
