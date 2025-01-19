import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import PhotoGrid from "../components/PhotoGrid";
import BottomNav from "../components/BottomNav";


const HomeScreen = () => {

  const handlePlusButtonPress = () => {
    Alert.alert("Add New Item", "You pressed the plus button!");
  };


  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="menu-outline" size={28} color="white" />
        <Text style={styles.headerTitle}>Feed</Text>
      </View>

      {/* Photo Grid */}
      <PhotoGrid />

      {/* Bottom Navigation */}
      <BottomNav />
      <TouchableOpacity style={styles.plusButton}>
        <Text style={styles.plusButtonText} onPress={handlePlusButtonPress}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    marginTop: 40,
    marginBottom: 30,
  },
  header: {
    flexDirection: "column",
    alignItems: "left",
    padding: 15,
    backgroundColor: "black",
  },
  headerTitle: {
    color: "white",
    fontSize: 30,
    marginLeft: -10,
    marginTop: 20,
    padding: 10,
  },
  plusButton: {
    position: 'absolute', 
    bottom: 80,
    right: 20, 
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    width: 60,
    height: 60,
    borderRadius: 30, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusButtonText: {
    fontSize: 36,
    color: 'white', 
  },
});
