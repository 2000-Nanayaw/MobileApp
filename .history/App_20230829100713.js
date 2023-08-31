import { StatusBar } from "expo-status-bar";
import { Button, Text, View, StyleSheet,Image } from "react-native";

function jsar() {
  return (
    <View style= {styles.container}>
      <Image source={require("./assets/profile.jpg")} style={styles.image}/>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Name</Text>
        <Text style= {[styles.label,styles.info]}>Sky community school</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Email</Text>
        <Text style= {[styles.label,styles.info]}>skycommunity@gmail.com</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Region</Text>
        <Text style= {[styles.label,styles.info]}>Central Region</Text>
      </View>
      <View>
        <Button title="CLICK TO START"/>
      </View>
            </View>
  );
}
const styles = StyleSheet.create({
  button:{
    top: 30,
  },
container: {
  flex: 1,
  marginHorizontal: 5,
},
image: {
  height: 150,
  width: 150,
  borderRadius: 75,
  marginBottom: 30,
  alignSelf: "center",
  marginTop: 100,
},
detailContainer: {
  flexDirection: "row",
  marginVertical: 3,
  
},
label:{
  borderColor: "black",
  borderWidth: 1,
  fontSize: 20,
  flex: 2.5,
  paddingHorizontal: 5,
},
info:{
  flex: 7.5,
}
});
export default jsar;
