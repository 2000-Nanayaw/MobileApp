// import { StatusBar } from "expo-status-bar";
// import { Button, StyleSheet, Text, View, TextInput } from "react-native";

// function App() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.container}>
//         <Text style={styles.color1}>SKY community school</Text>
//         <Button title="THIS IS MY NEW APP" />
//       </View>
//       <StatusBar style="auto" />
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "steelblue",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   color1: {
//     color: "yellow",
//     backgroundColor: "red"
//   },
// });

// export default App;

import { StatusBar } from "expo-status-bar";
import { Button, Text, TextInput, View, StyleSheet } from "react-native";

function jsar() {
  return (
    <View style={style.container}>
      <View style={style.container}>
        <Text style={style.colors}>this is my new app</Text>
        <Button title="this is a good button" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
const style = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: "red",
  color: "white",
  alignItems: "center",
  justifyContent: "center",
},
colors:{
  color: "white",

}
})
export default jsar;
