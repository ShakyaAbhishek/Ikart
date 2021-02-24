import React, {useEffect} from 'react';
import {StyleSheet, ScrollView, View, Text, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Route from './app/navigation';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import {store, persistor} from './app/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import FlashMessage from 'react-native-flash-message';

export default () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

const App = () => {
  useEffect(() => {
    /* splash screen hide method*/
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <View
        style={{
          flex: 1,
          backgroundColor: 'black',
        }}>
        <Route />
        <FlashMessage position="bottom" />
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});
