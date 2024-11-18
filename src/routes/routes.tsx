import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Home } from "../pages/Home/Home";

type BottomTabParamList = {
  Home: undefined;
  BIA: undefined;
  Shop: undefined;
  Perfil: undefined;
  Menu: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BiaScreen: React.FC = () => <Text>BIA Screen</Text>;
const ShopScreen: React.FC = () => <Text>Shop Screen</Text>;
const PerfilScreen: React.FC = () => <Text>Perfil Screen</Text>;
const MenuScreen: React.FC = () => <Text>Menu Screen</Text>;

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName: string;
          let iconColor = focused ? "#fff" : "#F54D67";

          switch (route.name) {
            case "Home":
              iconName = "home";
              break;
            case "BIA":
              iconName = "chat";
              break;
            case "Shop":
              iconName = "shopping-bag";
              break;
            case "Perfil":
              iconName = "person";
              break;
            case "Menu":
              iconName = "menu";
              break;
            default:
              iconName = "home";
          }

          return (
            <View
              style={[
                styles.iconContainer,
                focused && styles.iconContainerFocused,
              ]}
            >
              <Icon
                name={iconName}
                size={focused ? 32 : 24}
                color={iconColor}
              />
            </View>
          );
        },
        tabBarLabel: ({ focused }) => (
          <Text
            style={{
              color: focused ? "#ED1C53" : "#F54D67",
              fontSize: 11,
              fontWeight: "bold",
            }}
          >
            {route.name}
          </Text>
        ),
        tabBarStyle: {
          height: 78,
          paddingBottom: 5,
          backgroundColor: "#fff",
          borderTopWidth: 1,
          borderTopColor: "#e5e5e5",
          borderRadius: 20,
          paddingLeft: 10,
          paddingRight: 10,
          elevation: 5,
          shadowColor: "rgba(0, 0, 0, 0.25)", // iOS shadow
          shadowOffset: { width: 0, height: -1 }, // iOS shadow
          shadowOpacity: 1,
          shadowRadius: 4,
        },
        tabBarItemStyle: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="BIA" component={BiaScreen} />
      <Tab.Screen name="Shop" component={ShopScreen} />
      <Tab.Screen name="Perfil" component={PerfilScreen} />
      <Tab.Screen name="Menu" component={MenuScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  iconContainerFocused: {
    backgroundColor: "#ED1C53",
    borderWidth: 2,
    borderColor: "#fff",
    boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.25)",
    width: 65,
    height: 65,
    borderRadius: 15,
  },
});
