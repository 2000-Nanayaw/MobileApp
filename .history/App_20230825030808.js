import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

 function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
      <Text>sky community school</Text>
      <Text>sky community school</Text>
      <Text >sky community school</Text>
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
    
  },
  container: {
    backgroundColor: "yellow"
  },
  buttonStyle:{
    backgroundColor: "crimpson",
    color: "blue"
  }
});
export default App;