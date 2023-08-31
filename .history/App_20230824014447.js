import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

 function App() {
  return (
    <View style={styles.container}>
      <View>
      <Text>sky community school</Text>
      <Text>sky community school</Text>
      <Text>sky community school</Text>
      <Button title='good button '/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
export default App;