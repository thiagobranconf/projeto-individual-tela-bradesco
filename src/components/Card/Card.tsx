import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export function Card() {
  return (
    <View style={styles.container1}>
      <Image
        source={require("../../../assets/corporativo.jpg")}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Esteja um passo à frente!</Text>
        <Text style={styles.subtitle}>E invista no CDB DI Bradesco</Text>
      </View>
      <View style={styles.arrowContainer}>
        <Text style={styles.arrow}>{">"}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    marginBottom: 25,
    width: "84%",
    height: 100,
    borderRadius: 16,
    alignSelf: "center",
    boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.25)",
    borderWidth: 1,
    borderColor: "#F4F4F4",
  },
  image: {
    width: 85,
    height: 100,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
  },
  textContainer: {
    flex: 1,
    marginLeft: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 13,
    fontWeight: "bold",
    paddingTop: 7,
    color: "#888",
  },
  arrowContainer: {
    padding: 8,
  },
  arrow: {
    color: "blue",
    fontSize: 22,
    paddingRight: 8,
  },
});
