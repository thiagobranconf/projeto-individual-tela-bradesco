import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Svg, { Path } from "react-native-svg";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export function Opcoes() {
  return (
    <View style={styles.containerPai}>
      <View style={styles.opcoesContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.areaButton}>
            <AntDesign name="file1" size={24} color="white" />
          </View>
          <Text style={styles.texto}>Extrato</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.areaButton}>
            <MaterialCommunityIcons name="finance" size={24} color="white" />
          </View>
          <Text style={styles.texto}>Finance</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.areaButton}>
            <FontAwesome name="bank" size={22} color="white" />
          </View>
          <Text style={styles.texto}>Bancos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  opcoesContainer: {
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  actionButton: {
    alignItems: "center",
    justifyContent: "center",
  },
  areaButton: {
    backgroundColor: "#DB3D5E",
    height: 45,
    width: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  texto: {
    marginTop: 8,
    textAlign: "center",
    color: "#FCEFF3",
    fontWeight: "bold",
  },
  containerPai: {
    marginBottom: 70,
  },
});
