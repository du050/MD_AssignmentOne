import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import PhotoGrid from "../components/PhotoGrid";
import BottomNav from "../components/BottomNav";


const HomeScreen = () => {
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
        <Text style={styles.plusButtonText}>+</Text>
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
    position: 'absolute', // Fixed position for the button
    bottom: 80, // Distance from the bottom of the screen
    right: 20, // Distance from the right side of the screen
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark background for visibility
    width: 60,
    height: 60,
    borderRadius: 30, // Circular button
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusButtonText: {
    fontSize: 36,
    color: 'white', // Color of the '+' text
  },
});
