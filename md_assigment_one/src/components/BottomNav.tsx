import React from "react";
import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";


const BottomNav = () => {
  return (
    <View style={styles.navContainer}>
      <Ionicons name="home-outline" size={28} color="white" />
      <Ionicons name="search-outline" size={28} color="white" />
      <Ionicons name="grid-outline" size={28} color="white" />
      <Ionicons name="person-outline" size={28} color="white" />
    </View>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#333", 
    
  },
});

