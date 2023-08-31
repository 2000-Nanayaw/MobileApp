import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

 function App() {
  return (
    <View style={styles.container}>
      <View>
      <Text>sky community school</Text>
      <Text>sky community school</Text>
      <Text>sky community school</Text>
      <Button title='click to start '/>
      <TextInput />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'steelblue',
    alignItems: 'center',
    justifyContent: 'right',
    
  },
});
export default App;