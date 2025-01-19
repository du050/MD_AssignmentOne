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
        <Text style={styles.description}>Description for Home Two</Text>
       {/* Profile Picture and Name */}
       <View style={styles.profileContainer}>
            <Image source={require("../../assets/images/profile.jpg")} style={styles.profileImage} />
            <Text style={styles.profileName}>John Doe</Text>
          </View>
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    alignItems: 'center', // Centers the content horizontally
    justifyContent: 'center', // Centers the content vertically
    padding: 20, // Adds space around the content
  },
  imageContainer: {
    marginBottom: 120, // Adds space between images and descriptions
    
  },
  photo: {
    width: 400, // Set image width
    height: 300, // Set image height
    resizeMode: 'contain', // Ensures the image fits within the container
  },
  description: {
    marginTop: 30, // Space between image and description
    fontSize: 14,
    color: 'white',
    bottom: -20,
    opacity: 0.8,
   marginLeft: 65,
  
  },
  profileContainer: {
    position: 'absolute', // Position profile elements at the bottom left of the image
    bottom: -10, // Distance from the bottom
    left: 10, // Distance from the left
    flexDirection: 'row', // Align the image and name horizontally
    alignItems: 'center',
  },
  profileImage: {
    width: 40, // Size of the profile picture
    height: 40,
    borderRadius: 20, // Makes the image round
    marginRight: 10, // Space between image and name
  },
  profileName: {
    fontSize: 16,
    color: 'white', // Text color for visibility on the image
    marginBottom: 16, // Space between the image and the name
  },
  icon: {
    paddingRight: 50,
  },
  plusIcon: {
    position: 'absolute', // Position the plus icon relative to the profile image
    bottom: -9, // Distance from the bottom of the profile image
    right: 64, // Distance from the right side of the profile image
    
  },
});

export default MyComponent;
