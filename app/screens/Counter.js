import React, {useState} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
// import {increment, decrement} from '../../redux/actions/list';

// The props Are comming From mapStateToDispatch
const Counter = ({increaseCounter, decreaseCounter, counter}) => {
  return (
    <View>
      <Button
        title="Addition"
        color="#f194ff"
        onPress={() => {
          increaseCounter();
        }}
      />
      <Text
        style={{
          fontSize: 25,
          margin: 10,
          textAlign: 'center',
        }}>
        {counter}
      </Text>
      <Button
        title="Subtraction"
        color="#f194ff"
        onPress={() => {
          decreaseCounter();
        }}
      />
    </View>
  );
};

// This is place where we will get data from store...   Flow ===> Store TO Component
const mapStateToProps = state => ({
  counter: state.counter,
});

// This is place From Where we will Dispatch which Action is Triggred...   Flow ==> Component TO Store
const mapDispatchToProps = dispatch => {
  return {
    increaseCounter: () =>
      dispatch({
        type: 'INCREMENT',
      }),
    decreaseCounter: () =>
      dispatch({
        type: 'DECREMENT',
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: 'red',
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'red',
  },
  counter: {
    fontSize: 100,
    padding: 20,
  },
  btns: {
    fontSize: 120,
  },
  innerContainer: {
    flexDirection: 'row',
    height: 150,
    width: 250,
    marginTop: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
});
