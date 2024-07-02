import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native'; 



const CounterComponent = () => {
  const [number, setCount] = useState(0);
  const increaseCount = () => {
    setCount(number + 1);
  };
  const decreaseCount = () => {
    setCount(number - 1);
  };
  const resetCount = () => {
    setCount(0);
  };
  const randomCount = () => {
    setCount(number + 5)

  };
  // const setRandomCount = () => {
  //   // Generate a random number (you can adjust the range as needed)
  //   const randomNumber = Math.floor(Math.random() * 100);
  //   setCount(randomNumber);
  // };

  return (
      
    <View>
    <Text>Counter: {number}</Text>
    <Button title="Increase" onPress={increaseCount} />
    <Button title="Decrease" onPress={decreaseCount} />
    <Button title="Reset" onPress={resetCount} />
    {/* <Button title="Random" onPress={setRandomCount} /> */}
  </View>
);

 }


export default CounterComponent;