// import { StatusBar } from "expo-status-bar";
// import { Button, Text, TextInput, View, StyleSheet } from "react-native";

// function jsar() {
//   return (
//     <View style={style.container}>
//       <Text style={style.firstText}>this is my new app</Text>
//       <Text style={style.colors}>how are you i am always happy</Text>
//       <Text style={style.colors}>MOBILE APP DEVELOPMENT</Text>
//       <Text style={style.colors}>MOBILE APP DEVELOPMENT</Text>
//       <TextInput title="MOBILE APP DEVELOPMENT" />
//       <Button title="this is a good button" />
//     </View>
//   );
// }
// const style = StyleSheet.create({
//   colors: {
//     backgroundColor: "orange",
//     color: "red",
//   },
//   container: {
//     flex: 1,
//     backgroundColor: "yellow",
//     flexDirection: "column",
//     justifyContent: "space-around",
//     alignItems: "center",

//   },
//   firstText:{
//     position: "absolute",
//     top:100,
//   }
// });
// export default jsar;

import { StatusBar } from "expo-status-bar";
import { Button, Text, View, StyleSheet,Image } from "react-native";
import profile from "./assets/profile.jpg"

function jsar() {
  return (
    <View style= {styles.container}>
      <Image source={profile} />

    </View>
  );
}
const styles = StyleSheet.create({
container: {
  flex: 1,
},
image: {
  height: 200,
  width: 200,
  borderRadius: 50,
}
});
export default jsar;
