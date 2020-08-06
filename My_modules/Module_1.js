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
import { Foundation } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export default function Module_1() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <Text style={[styles.text, { fontSize: 25, marginTop: 50 }]}>
        {" "}
        BMI Calculator
      </Text>
      <View style={{ height: 30 }}></View>
      <View style={styles.male_Female_ButtonGroup}>
        <View style={styles.text_Image_Group}>
          <TouchableOpacity>
            <Foundation name="male-symbol" size={70} color="#50c8ed" />
          </TouchableOpacity>

          <Text style={styles.text}> Male </Text>
        </View>

        <View style={styles.text_Image_Group}>
          <TouchableOpacity>
            <Foundation name="female-symbol" size={70} color="#50c8ed" />
          </TouchableOpacity>

          <Text style={styles.text}> Female </Text>
        </View>
      </View>

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
          <Text style={styles.number_Weight_Age}> 50 </Text>
          <View style={styles.minus_Plus_Group}>
            <TouchableOpacity>
              <Entypo name="minus" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Entypo name="plus" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.text_Image_Group}>
          <Text style={styles.text_Weight_Age}> Age </Text>
          <Text style={styles.number_Weight_Age}> 20 </Text>
          <View style={styles.minus_Plus_Group}>
            <TouchableOpacity>
              <Entypo name="minus" size={24} color="white" />
            </TouchableOpacity>

            <TouchableOpacity>
              <Entypo name="plus" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.calculateGroup}>
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
    lineHeight: 30,
    textAlign: "center",
    marginLeft: 10,
  },

  number_Weight_Age: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    lineHeight: 30,
    textAlign: "center",
    marginLeft: 10,
  },
  textCalculate: {
    color: "#fff",
    fontSize: 15,
    width: 350,
    lineHeight: 40,
    textAlign: "center",
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
  calculateGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
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
  minus_Plus_Group: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  minus_Plus_Text: {
    color: "#fff",
    fontSize: 30,
  },

  image_Minus_Plus: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#24263b",
    borderRadius: 15,
  },

  text_Image_Group: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  image_Male_Female: {
    width: 120,
    height: 120,
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
    marginTop: 40,
  },
});
