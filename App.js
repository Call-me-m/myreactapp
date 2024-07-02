import React from 'react';
import { View, StyleSheet } from 'react-native';
import CounterComponent from './components/CounterComponet.js';
// import BlogReview from './components/testing'
const App = () => {
  return (
    <View style={styles.container}>
      
  
      <CounterComponent></CounterComponent> 
    {/* <Text>Counter: {number}</Text>
    <Button title="Increase" onPress={increaseCount} />
    <Button title="Decrease" onPress={decreaseCount} />
    <Button title="Reset" onPress={resetCount} /> */}
    
  </View>
  );
};
const styles = StyleSheet.create({
  container: { 
    // backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default App;
