import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';
import DetailPokemon from './src/views/detailPokemon';
import ListPokemon from './src/views/listPokemon';
import Navbar from './src/components/Navbar';
class App extends Component {
  render() {
    return (
      <View style={style.container}>
        {/* <Navbar style={style.navbar} /> */}
        <Router>
          <Scene key="root">
            <Scene
              key="list_pokemon"
              component={ListPokemon}
              title="Pokedex"
              navBar={Navbar}
            />
            <Scene key="detail_pokemon" component={DetailPokemon} title="" />
          </Scene>
        </Router>
      </View>
    );
  }
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});
export default App;
