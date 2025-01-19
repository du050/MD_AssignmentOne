import React from 'react';
import { View, Image, Text, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MyComponent = () => {
  return (
    <ScrollView contentContainerStyle={styles.gridContainer}>
      {/* Image and description for the first image */}
      <View style={styles.imageContainer}>
        <Image source={require("../../assets/images/homeOne.jpg")} style={styles.photo} />
        
        <Text style={styles.description}>
        <Ionicons name="share-social-outline" size={20} color="white" style={styles.icon} />
          v..o</Text>
        
       {/* Profile Picture and Name */}
       <View style={styles.profileContainer}>
            <Image source={require("../../assets/images/profile.jpg")} style={styles.profileImage} />
            <Text style={styles.profileName}>carpe-dei</Text>
            <Ionicons name="add-circle" size={20} color="white" style={styles.plusIcon} />
          </View>
        </View>

      {/* Image and description for the second image */}
      <View style={styles.imageContainer}>
        <Image source={require("../../assets/images/hometwo.jpg")} style={styles.photo} />
        <Text style={styles.description}>
        <Ionicons name="share-social-outline" size={20} color="white" style={styles.icon} />
          ...</Text>
       {/* Profile Picture and Name */}
       <View style={styles.profileContainer}>
            <Image source={require("../../assets/images/profile.jpg")} style={styles.profileImage} />
            <Text style={styles.profileName}>John Doe</Text>
            <Ionicons name="add-circle" size={20} color="white" style={styles.plusIcon} />
          </View>
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    alignItems: 'center',
    justifyContent: 'center', 
    padding: 20, 
  },
  imageContainer: {
    marginBottom: 120, 
    
  },
  photo: {
    width: 400, 
    height: 300, 
    resizeMode: 'contain', 
  },
  description: {
    marginTop: 30, 
    fontSize: 14,
    color: 'white',
    bottom: -20,
    opacity: 0.8,
   marginLeft: 65,
  
  },
  profileContainer: {
    position: 'absolute', 
    bottom: -10, 
    left: 10, 
    flexDirection: 'row', 
    alignItems: 'center',
  },
  profileImage: {
    width: 40, 
    height: 40,
    borderRadius: 20, 
    marginRight: 10, 
  },
  profileName: {
    fontSize: 16,
    color: 'white', 
    marginBottom: 16, 
  },
  icon: {
    paddingRight: 50,
  },
  plusIcon: {
    position: 'absolute', 
    bottom: -9, 
    right: 64, 
    
  },
});

export default MyComponent;
