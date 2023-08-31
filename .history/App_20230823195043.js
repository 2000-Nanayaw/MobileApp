import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

 function App() {
  return (
    <View style={styles.container}>
      <view>
      <Text>sky community school</Text>
      <Text>sky community school</Text>
      <Text>sky community school</Text>
      </view>
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
    // fontFamily: "arial bold",
  },
});
export default App;