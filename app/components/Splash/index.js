import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

export default class SplashScreen extends React.Component {
  // lottie splash animantion
  render() {
    return (
      <ImageBackground
        source={require('../../assets/images/icon.png')}
        style={styles.backgroundImageStyle}>
        <LottieView
          source={require('../../assets/data/ikart.json')}
          loop={false}
          style={styles.lottieStyle}
          autoPlay
          onAnimationFinish={() => this.props.navigation.navigate('Home')}
        />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImageStyle: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lottieStyle: {
    height: 200,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
