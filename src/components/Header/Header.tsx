import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import { Feather } from "@expo/vector-icons";

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 22
  : 64;

export function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.nomebanco}>Bradesco</Text>

        <TouchableOpacity style={styles.alerta}>
          <Feather name="bell" size={25} color="white" />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>2</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F31D5A",
    paddingTop: statusBarHeight,
    flexDirection: "row",
    paddingStart: 50,
    paddingBottom: 22,
  },
  content: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nomebanco: {
    fontSize: 21,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
  alerta: {
    position: "relative",
    marginRight: 22,
  },
  badge: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: "#42FC67",
    borderRadius: 10,
    width: 18,
    height: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "black",
    fontSize: 11,
    fontWeight: "bold",
  },
});
