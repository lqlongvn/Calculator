import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Foundation } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
const ACTIVE_COLOR = "#24263b";
const UNACTIVE_COLOR = "#323344";

export default function Gender({ gender, setGender }) {
  return (
    <View style={styles.gender}>
      <TouchableOpacity onPress={() => setGender("male")}>
        <View
          style={[
            styles.genderOption,
            {
              backgroundColor:
                gender === "male" ? ACTIVE_COLOR : UNACTIVE_COLOR,
            },
          ]}
        >
          <Foundation name="male-symbol" size={70} color="#50c8ed" />
          <Text style={{ color: "#7a7c8a" }}>MALE</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setGender("female")}>
        <View
          style={[
            styles.genderOption,
            {
              backgroundColor:
                gender === "female" ? ACTIVE_COLOR : UNACTIVE_COLOR,
            },
          ]}
        >
          <Foundation name="female-symbol" size={70} color="#e74f25" />
          <Text style={{ color: "#7a7c8a" }}>FEMALE</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  gender: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  genderOption: {
    // backgroundColor: "#24263b",
    backgroundColor: "#323344",
    width: (windowWidth * 42) / 100,
    height: (windowWidth * 42) / 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
  },
});
