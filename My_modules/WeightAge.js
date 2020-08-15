import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { BMI_VALUE } from "./style";
const windowWidth = Dimensions.get("window").width;

export default function WeightAge({age,setAge,weight,setWeight}) {
  

  const decreaseWeight = () => {
    if (weight > 1) setWeight(weight - 1);
  };

  const decreaseAge = () => {
    if (age > 1) setAge(age - 1);
  };

  const increase = (type) => {
    if (type === 1) {
      setWeight(weight + 1);
    } else {
      setAge(age + 1);
    }
  };

  return (
    <View style={styles.info}>
      <View style={styles.weightBox}>
        <Text style={{ color: "#7a7c8a" }}>WEIGHT</Text>

        <Text style={styles.heightInfo}>{weight}</Text>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={decreaseWeight}>
            <View style={styles.minusBox}>
              <Entypo name="minus" size={24} color="white" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => increase(1)}>
            <View style={styles.plusBox}>
              <Entypo name="plus" size={24} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.weightBox}>
        <Text style={{ color: "#7a7c8a" }}>AGE</Text>
        <Text style={styles.heightInfo}>{age}</Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={decreaseAge}>
            <View style={styles.minusBox}>
              <Entypo name="minus" size={24} color="white" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => increase(2)}>
            <View style={styles.plusBox}>
              <Entypo name="plus" size={24} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
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
  heightInfo: {
    ...BMI_VALUE,
  },
});
