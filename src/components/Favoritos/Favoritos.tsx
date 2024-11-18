import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export function Favoritos() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favoritos</Text>
      <View style={styles.opcoesContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.areaButton}>
            <Icon name="sync-alt" size={26} color="#F54D67" />
          </View>
          <Text style={styles.texto}>Transferência</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.areaButton}>
            <Icon name="widgets" size={26} color="#F54D67" />
          </View>
          <Text style={styles.texto}>Pix</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.areaButton}>
            <Icon name="payments" size={26} color="#F54D67" />
          </View>
          <Text style={styles.texto}>Pagamentos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.areaButton}>
            <Icon name="credit-card" size={26} color="#F54D67" />
          </View>
          <Text style={styles.texto}>Cartões</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.opcoesContainer2}>
        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.areaButton}>
            <Icon name="attach-money" size={26} color="#F54D67" />
          </View>
          <Text style={styles.texto}>Empréstimos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.areaButton}>
            <Icon name="trending-up" size={26} color="#F54D67" />
          </View>
          <Text style={styles.texto}>Investimentos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.areaButton}>
            <Icon name="phone-android" size={26} color="#F54D67" />
          </View>
          <Text style={styles.texto}>Recargas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.areaButton}>
            <Icon name="tune" size={26} color="#6E96F1" />
          </View>
          <Text style={styles.texto1}>Personalizar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 18,
    opacity: 0.6,
    fontWeight: "bold",
    paddingLeft: 20,
  },
  opcoesContainer: {
    paddingRight: 2,
    paddingTop: 20,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  opcoesContainer2: {
    paddingTop: 18,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: 20,
  },
  actionButton: {
    alignItems: "center",
    justifyContent: "center",
  },
  areaButton: {
    backgroundColor: "white",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.30)",
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#F4F4F4",
  },
  texto: {
    marginTop: 12,
    textAlign: "center",
    color: "#454545",
    fontWeight: "bold",
    fontSize: 11,
    opacity: 0.9,
  },
  texto1: {
    marginTop: 12,
    textAlign: "center",
    color: "#6E96F1",
    fontWeight: "bold",
    fontSize: 11,
  },
});
