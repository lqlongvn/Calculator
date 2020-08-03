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

      <View style={{ height: 40 }}></View>

      <Text style={[styles.text, { fontSize: 25 }]}> BMI Calculator</Text>

      <View style={{ height: 30 }}></View>

      <View style={styles.male_Female_ButtonGroup}>
        <View style={styles.text_Image_Group}>
          <Image
            style={styles.image_Male_Female}
            source={require("../assets/male_1.png")}
          />
          <Text style={styles.text}> Male </Text>
        </View>

        <View style={styles.text_Image_Group}>
          <Image
            style={styles.image_Male_Female}
            source={require("../assets/female_1.jpg")}
          />
          <Text style={styles.text}> Female </Text>
        </View>
      </View>

      <View style={{ height: 20 }}></View>

      <View style={styles.height_Group}>
        <Text style={styles.textHeight}> Height</Text>
        <View style={styles.centimeter_Group}>
          <Text style={styles.textHeightNumber}> 118</Text>
          <Text style={styles.text_cm}> cm</Text>
        </View>
      </View>


      <View style={styles.weight_Age_Group}>
        <View style={styles.text_Image_Group}>
          <Text style={styles.text_Weight_Age}> Weight </Text>
        </View>

        <View style={styles.text_Image_Group}>
          <Text style={styles.text_Weight_Age}> Age </Text>
        </View>
      </View>


      <View style={{ height: 40 }}></View>

      <View style={styles.linkButtonGroup}>
        <TouchableOpacity style={styles.linkButton}>
          <Text style={styles.textCalculate}> Calculate</Text>
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
  text_Weight_Age: {
    color: "#7e808e",
    fontSize: 15,
    lineHeight: 40,
    textAlign: "center",
    marginLeft: 10,
  },

  textCalculate: {
    color: "#fff",
    fontSize: 15,
    width: 350,
    lineHeight: 40,
    textAlign: "center",
    marginLeft: 10,
    backgroundColor: "#e83d66",
  },
  textHeight: {
    color: "#7e808e",
    fontSize: 15,
    lineHeight: 40,
    textAlign: "center",
    marginLeft: 10,
    backgroundColor: "#323344",
  },

  textHeightNumber: {
    color: "#fff",
    fontSize: 24,
    lineHeight: 40,
    textAlign: "center",
    marginLeft: 10,
    backgroundColor: "#323344",
  },

  text_cm: {
    color: "#fff",
    fontSize: 18,
    lineHeight: 40,
    textAlign: "center",
    marginLeft: 10,
    backgroundColor: "#323344",
  },


  centimeter_Group: {
    flexDirection: "row",
    lineHeight: 40,
    textAlign: "center",
    marginLeft: 10,
    backgroundColor: "#323344",
  },
  linkButtonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
  male_Female_ButtonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  weight_Age_Group: {
    width: 350,
    height: 150,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  text_Image_Group: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  image_Male_Female: {
    width: 150,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#24263b",
  },
  height_Group: {
    width: 350,
    height: 150,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#323344",
  },
});
