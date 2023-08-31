// import { StatusBar } from 'expo-status-bar';
// import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

//  function App() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.container}>
//       <Text>sky community school</Text>
//       </View>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     alignItems: 'center',
//     justifyContent: 'center',
    
//   },
 
// });
// export default App;

import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text,TextInput, View } from "react-native";

function jsar(){
  return(
    <View style= "styles.container">
    <View style="styles.container">
      <Text >NANA ADOMAH SAMUEL JUNIOR</Text>
    </View>
    <StatusBar style="auto" />
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  }
})
export default jsar;