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
import { View } from "react-native";
import {Button, StyleSheet, Text, TextInput, view} from "react-native"

function app(){
  return(
    <View>
      <View>
          <Text>MY FIRST APP</Text>
      </View>
      <StatusBar style="auto"/>
    </View>
  )
}
export default app;