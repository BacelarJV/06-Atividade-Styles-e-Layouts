import {
  Button,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
  Switch,
} from "react-native";
import React from "react";
import Checkbox from "expo-checkbox";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';

type CheckoutButtonProps = {
  onPress: () => void;
  customTitle?: string;
};
export default function CheckoutButton({
  onPress,
  customTitle = "Continuar",
}: CheckoutButtonProps) {
  return (
    <View style={styles.container}>
      <View style={styles.cupon}>
      <Ionicons name="ticket-sharp" size={24} color="orange" />
        <Text style={{ padding: 5 }}>Cupom Shoppe</Text>
        <View style={styles.right}>
          <Entypo name="chevron-small-right" size={20} color="#a9a9a9" />
          <Text style={{ color: "gray" }}>Selecione ou insira o código</Text>
        </View>
      </View>
      <View style={styles.balance}>
      <FontAwesome6 name="circle-dollar-to-slot" size={24} color="#ffd700" />
        <Text style={{ padding: 4 }}>Saldo de moedas insuficiente</Text>
        <AntDesign name="questioncircleo" size={15} color="gray" />
        <View style={styles.right}>
          <Switch trackColor={{ false: "#767577", true: "#81b0ff" }} />
        </View>
      </View>
      <View style={styles.next}>
        <View style={styles.left}>
          <Checkbox style={{ marginLeft: 20, borderColor: "gray" }} />
          <Text style={styles.gray}>Tudo</Text>
        </View>
        <View style={styles.price}>
          <Text style={{ padding: 3 }}>Sub-total</Text>
          <Text style={styles.bold}>R$53,06</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.text}>{customTitle}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
  },

  balance: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    marginBottom: 1,
    padding: 1,
    paddingLeft: 10,
    gap: 8,
  },

  cupon: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    marginBottom: 1,
    padding: 7,
    gap:8,
  },

  next: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    minHeight: 6,
  },

  button: {
    backgroundColor: "red",
    alignItems: "center",
  },

  price: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 2,
  },

  bold: {
    color: "red",
    fontWeight: "bold",
    fontSize: 20,
  },

  gray: {
    color: "gray",
    paddingLeft: 10,
  },

  text: {
    color: "white",
    fontWeight: "bold",
    padding: 24,
    fontSize: 18,
  },

  right: {
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",
    flex: 1,
  },
  left: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    flex: 1,
    marginTop: 20,
  },
});