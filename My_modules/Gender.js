import React from "react";
import { View, TouchableOpacity, StyleSheet, Dimensions, Text } from "react-native";
import { Foundation } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;

export default function Gender() {
  return (
    <View style={styles.gender}>
      <TouchableOpacity>
        <View style={styles.maleOption}>
          <Foundation name="male-symbol" size={70} color="#50c8ed" />
          <Text style={{ color: "#7a7c8a" }}>MALE</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.femaleOption}>
          <Foundation name="female-symbol" size={70} color="#e74f25" />
          <Text style={{ color: "#7a7c8a" }}>FEMALE</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  maleOption: {
    backgroundColor: "#24263b",
    width: (windowWidth * 42) / 100,
    height: (windowWidth * 42) / 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
  },
 
  femaleOption: {
    backgroundColor: "#323344",
    width: (windowWidth * 42) / 100,
    height: (windowWidth * 42) / 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
  }, 
  gender: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  }, 
});


