import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Button, StyleSheet,Text, view, TextInput } from "react-native";

function App(){
  return(
    <View style={styles.container}>
      <View style={styles.container}>
      <Text>
        SKY community school
      </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "steelblue",
    alignItems: "center"
  }
})

export default App;