import React from "react";

import { View, StyleSheet, Dimensions, Text } from "react-native";
import Slider from "@react-native-community/slider";
const windowWidth = Dimensions.get("window").width;

export default function Height() {
  return (
    <View style={styles.heightBox}>
      <Text style={{ color: "#7a7c8a" }}>HEIGHT</Text>
      <Text style={styles.heightInfo}>150 cm</Text>
      <Slider
        style={{ width: (windowWidth * 85) / 100, height: 40 }}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#744b60"
        maximumTrackTintColor="black"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  heightBox: {
    height: 140,
    backgroundColor: "#323344",
    marginVertical: 12,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "space-around",
  },

});
