import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
  Dimensions,
  StatusBar,
  Modal,
} from "react-native";
import Slider from "@react-native-community/slider";
import Gender from "./Gender";
import Height from "./Height";
import WeightAge from "./WeightAge";
import { BMI_VALUE } from "./style";

const windowWidth = Dimensions.get("window").width;

export default function BMICalculator() {
  const [modalVisible, setModalVisible] = useState(false);
  const [gender, setGender] = useState("male");

  function calculateBmi() {
    setModalVisible(true);

    // Tính chỉ số BMI
  }

  return (
    <>
      <StatusBar barStyle={"light-content"} />

      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>BMI CALCULATOR</Text>
        </View>

        <View style={styles.content}>
          <Gender gender={gender} setGender={setGender} />

          <Height />

          <WeightAge />

          <View style={styles.calButton}>
            <TouchableOpacity onPress={calculateBmi}>
              <View style={styles.button}>
                <Text style={styles.calButtonText}>CALCULATE</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <Modal animationType="slide" visible={modalVisible}>
          <View style={{ flex: 1, backgroundColor: "black" }}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "red" }}>
                KET QUA BMI CHO GIOI TINH: {gender}
              </Text>

              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <View style={styles.button}>
                  <Text style={styles.calButtonText}>RECALCULATE</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
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
  calButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    height: 45,
    backgroundColor: "#e83d66",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});
