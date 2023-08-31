import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Button, StyleSheet, Text, view, TextInput } from "react-native";

function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.color1}>SKY community school</Text>
        <Button title="THIS IS MY NEW APP" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
  color1: {
    color: "yellow",
    backgroundColor: "red"
  },
});

export default App;
