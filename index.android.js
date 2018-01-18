import React from 'react';
import { AppRegistry, View, Text, Button } from 'react-native';

const gearNumeroAleatorio = () => {
  var numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor(numeroAleatorio * 10);
  alert(numeroAleatorio);
}

const App = () => {
  return (
    <View>
      <Text>Gerador de números randômicos</Text>
      <Button
        title="Gerador de números randômicos"
        onPress={gearNumeroAleatorio}
      />
    </View>

    );
};

AppRegistry.registerComponent('App01NR', () => App);
