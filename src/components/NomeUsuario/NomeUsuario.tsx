import { StyleSheet, Text, View } from "react-native";

export function NomeUsuario() {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.nomeusuario}>Olá, Thiago</Text>
        <Text style={styles.sair}>Sair</Text>
      </View>
      <View style={styles.linha} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  container1: {
    flexDirection: "row",
    alignItems: "center",
    width: "95%",
  },
  nomeusuario: {
    fontSize: 18,
    color: "#FCEFF3",
    fontWeight: "bold",
    paddingStart: 22,
    flex: 1,
  },
  sair: {
    fontSize: 14,
    textAlign: "right",
    color: "#FCEFF3",
    paddingRight: 4,
    flex: 1,
  },
  linha: {
    height: 1,
    backgroundColor: "#d0d0d0",
    width: "90%",
    alignSelf: "center",
    marginTop: 9,
    opacity: 0.6,
  },
});
