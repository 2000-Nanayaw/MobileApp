import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, YellowBox } from 'react-native';

 function App() {
  return (
    <View style={styles.container}>
      <View>
      <Text>sky community school</Text>
      <Text style={{backgroundColor: "red"}}>sky community school</Text>
      <Text style={styles.jsarText}>sky community school</Text>
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
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  jsarText:{
    color: "blue",
    backgroundColor: "Yellow"
    
  }
});
export default App;