import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { BMI_VALUE } from "./style";

const windowWidth = Dimensions.get("window").width;

export default function WeightAge() {
  return (
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
  );
}

const styles = StyleSheet.create({
  weightBox: {
    backgroundColor: "#323344",
    width: (windowWidth * 42) / 100,
    height: (windowWidth * 42) / 100,
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 7,
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
  info: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
