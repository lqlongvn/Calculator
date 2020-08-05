import React from "react";

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  StatusBar,
} from "react-native";
import Gender from "./Gender";
import Height from "./Height";
import WeightAge from "./WeightAge";


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
           <WeightAge />           
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
  
  button: {
    height: 45,
    backgroundColor: "#e83d66",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});
