import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

export function Saldo() {
  const [saldoVisivel, setSaldoVisivel] = useState(false);

  const toggleSaldo = () => {
    setSaldoVisivel(!saldoVisivel);
  };

  return (
    <View style={styles.container}>
      <View style={styles.saldoContainer}>
        <Text style={styles.meusaldo}>Meu saldo</Text>
        <TouchableOpacity onPress={toggleSaldo} style={styles.eye}>
          <Feather
            name={saldoVisivel ? "eye" : "eye-off"}
            size={17}
            color="#DCDCDC"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.saldoRealContainer}>
        {saldoVisivel ? (
          <Text style={styles.saldoreal}>R$ 10.547,56</Text>
        ) : (
          <View style={styles.saldoOculto} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  saldoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  meusaldo: {
    fontSize: 19,
    color: "#FCEFF3",
    fontWeight: "bold",
  },
  eye: {
    paddingLeft: 5,
    paddingBottom: 5,
  },
  saldoRealContainer: {
    alignItems: "center",
    paddingTop: 15,
  },
  saldoreal: {
    fontSize: 19,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  saldoOculto: {
    width: 145,
    height: 29,
    backgroundColor: "#F5B8C7",
    borderRadius: 12,
  },
});
