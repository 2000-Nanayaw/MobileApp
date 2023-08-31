import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

 function App() {
  return (
    <View style={styles.container}>
      <View>
      <Text>sky community school</Text>
      <Text>sky community school</Text>
      <Text>sky community school</Text>
      <Button title='click to start '/>
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
});
export default App;