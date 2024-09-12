import {Pressable, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import tw from 'twrnc';

const Splash = ({navigation}) => {
  return (
    <View style={styles.splashContainer}>
      <Image
        source={require('../assets/images/splash.png')}
        style={styles.splashImg}
      />
      <Text style={styles.heading}>Instructions</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  splashImg: {
    height: 200,
    aspectRatio: 1,
    borderRadius: 90,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  splashContainer: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150,
  },
  heading: {
fontFamily:100,
  },
});
