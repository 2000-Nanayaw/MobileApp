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
      <Text >this is my new app</Text>
      <Text style={style.colors}>how are you i am always happy</Text>
      <Text style={style.colors}>MOBILE APP DEVELOPMENT</Text>
      <Text style={style.colors}>MOBILE APP DEVELOPMENT</Text>
      <TextInput title="MOBILE APP DEVELOPMENT" />
      <Button title="this is a good button" />
    </View>
  );
}
const style = StyleSheet.create({
   
  colors: {
    backgroundColor: "orange",
    color: "red",

  },
  container: { 
  flex: 1,
  backgroundColor: "yellow",
  flexDirection: "row"
},
});
export default jsar;
