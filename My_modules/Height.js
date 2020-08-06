import React, { useState } from "react";

import { View, StyleSheet, Dimensions, Text } from "react-native";
import Slider from "@react-native-community/slider";
const windowWidth = Dimensions.get("window").width;
import { BMI_VALUE } from "./style";


export default function Height() {
  const [height, setHeight] = useState(100);
  return (
    <View style={styles.heightBox}>
      <Text style={{ color: "#7a7c8a" }}>HEIGHT</Text>
  <Text style={styles.heightInfo}> {height} cm</Text>
      <Slider
        style={{ width: (windowWidth * 85) / 100, height: 40 }}
        minimumValue={0}
        maximumValue={200}
        minimumTrackTintColor="#744b60"
        maximumTrackTintColor="black"
        step ={1}
        value={height}
        onValueChange={(value)=>setHeight(value)}
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
  heightInfo: {
    ...BMI_VALUE,
  },


});
