import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import Counter from './app/screens/Counter';
import {Provider} from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
  },
  txt: {
    margin: 10,
    fontSize: 20,
  },
});
