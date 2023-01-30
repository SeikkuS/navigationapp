import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [history, setHistory] = useState([]);

  const sum = () => {
    result = parseFloat(input1) + parseFloat(input2);
    setHistory(prevHistory => [...prevHistory, `${input1} + ${input2} = ${result}`]);
    alert(result);
  };

  const subtract = () => {
    result = parseFloat(input1) - parseFloat(input2);
    setHistory(prevHistory => [...prevHistory, `${input1} - ${input2} = ${result}`]);
    alert(result);
  };

  const navigateToHistory = () => {
    navigation.navigate('History');
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {({ navigation }) => (
            <View style={styles.container}>
              <TextInput
                placeholder="Enter first number"
                numeric
                keyboardType={'numeric'}
                style={{ width: 200, borderColor: 'gray', borderWidth: 1 }}
                value={input1}
                onChangeText={text => setInput1(text)}
              />
              <TextInput
                placeholder="Enter second number"
                numeric
                keyboardType={'numeric'}
                style={{ width: 200, borderColor: 'gray', borderWidth: 1 }}
                value={input2}
                onChangeText={text => setInput2(text)}
              />
              <View style={{ flexDirection: 'row' }}>
                <Button variant="outlined" title=" + " onPress={sum} />
                <Text> </Text>
                <Button variant="outlined" title=" - " onPress={subtract} />
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('History')}>
                <Text> Show history </Text>
              </TouchableOpacity>
              <StatusBar style="auto" />
            </View>
          )}
        </Stack.Screen>

        <Stack.Screen name="History">
          {() => (
            <View style={styles.container}>
              {history.map((item, index) => (
                <Text key={index}>{item}</Text>
              ))}
            </View>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App;
