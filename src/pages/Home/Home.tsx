import { StyleSheet, View } from "react-native";
import { Header } from "../../components/Header/Header";
import { NomeUsuario } from "../../components/NomeUsuario/NomeUsuario";
import { Saldo } from "../../components/Saldo/Saldo";
import { Opcoes } from "../../components/Opcoes/Opcoes";
import { LinearGradient } from "expo-linear-gradient";
import { Favoritos } from "../../components/Favoritos/Favoritos";
import { Waves } from "../../components/Waves/Waves";
import { Card } from "../../components/Card/Card";
export function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <LinearGradient colors={["#F31D5A", "#CC0A2F"]}>
        <NomeUsuario />
        <Saldo />
        <Opcoes />
      </LinearGradient>
      <Waves />
      <Favoritos />
      <Card />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
