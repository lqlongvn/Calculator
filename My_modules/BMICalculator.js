import React from "react";
import { Entypo } from "@expo/vector-icons";

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Dimensions,
  StatusBar,
} from "react-native";
import Gender from "./Gender";
import Height from "./Height";
import { BMI_VALUE } from "./style";

const windowWidth = Dimensions.get("window").width;

export default function BMICalculator() {
  return (
    <>
      <StatusBar barStyle={"light-content"} />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>BMI CALCULATOR</Text>
        </View>
        <View style={styles.content}>
           <Gender />
           <Height />           
          <View style={styles.info}>
            <View style={styles.weightBox}>
              <Text style={{ color: "#7a7c8a" }}>WEIGHT</Text>
              <Text style={styles.heightInfo}>50</Text>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity>
                  <View style={styles.minusBox}>
                    <Entypo name="minus" size={24} color="white" />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={styles.plusBox}>
                    <Entypo name="plus" size={24} color="white" />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.weightBox}>
              <Text style={{ color: "#7a7c8a" }}>AGE</Text>
              <Text style={styles.heightInfo}>20</Text>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity>
                  <View style={styles.minusBox}>
                    <Entypo name="minus" size={24} color="white" />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={styles.plusBox}>
                    <Entypo name="plus" size={24} color="white" />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.calButton}>
            <TouchableOpacity>
              <View style={styles.button}>
                <Text
                  style={{ color: "white", fontSize: 18, fontWeight: "bold" }}
                >
                  CALCULATE
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#171b30",
  },
  header: {
    backgroundColor: "#1d2236",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  textHeader: {
    color: "white",
    fontSize: 18,
  },
  content: {
    marginTop: 5,
    backgroundColor: "#1d2236",
    flex: 1,
    paddingHorizontal: 15,
  },
  info: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  calButton: {
    flex: 1,
    justifyContent: "center",
  },
  heightInfo: {
    ...BMI_VALUE,
  },
  weightBox: {
    backgroundColor: "#323344",
    width: (windowWidth * 42) / 100,
    height: (windowWidth * 42) / 100,
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 7,
  },
  button: {
    height: 45,
    backgroundColor: "#e83d66",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  plusBox: {
    height: 30,
    width: 30,
    backgroundColor: "#5e606e",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  minusBox: {
    height: 30,
    width: 30,
    backgroundColor: "#5e606e",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    marginRight: 30,
  },
});
