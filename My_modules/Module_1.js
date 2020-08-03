import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

export default function Module_1() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View style={{ height: 100 }}></View>

      <Text style={[styles.text, { fontSize: 25 }]}> BMI Calculator</Text>

      <View style={styles.male_Female_ButtonGroup}>
        <Image
          style={styles.image_Male_Female}
          source={require("../assets/male_1.png")}
        />
        <Image
          style={styles.image_Male_Female}
          source={require("../assets/female_1.jpg")}
        />
      </View>

      <View style={{ height: 60 }}></View>

      
      <View style={{ height: 240 }}></View>

      <View style={styles.linkButtonGroup}>
        <TouchableOpacity style={styles.linkButton}>
          <Text style={styles.text}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.linkButton}>
          <Text style={styles.text}>About</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1d2236",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 15,
    lineHeight: 40,
    textAlign: "center",
    marginLeft: 10,
  },
  hienThiThongBao: {
    width: "90%",
    marginTop: 15,
  },
  lockIcon: {
    fontSize: 20,
    color: "gray",
    position: "absolute",
    top: 18,
    left: 20,
    zIndex: 1,
  },
  thongBao: {
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 40,
    textAlign: "center",
    fontSize: 18,
    color: "#000",
    width: "100%",
    fontWeight: "bold",
  },
  loginButton: {
    marginTop: 15,
    height: 50,
    backgroundColor: "#8d015a",
    borderRadius: 25,
    textAlign: "center",
    fontSize: 20,
    width: "90%",
  },
  linkButtonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
  male_Female_ButtonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
  image_Male_Female: {
      width:150,
      height:150,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:"#24263b",
  
  },
});
