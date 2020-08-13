import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StoreContextProvider, useStore } from './providers/store-context-provider';
import { Navigation } from './components/Navigation/Navigation';
import { Root } from './components/Root';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';
import 'mobx-react-lite/batchingForReactDom'

export const App = (props: any) => {
  const [loaded] = useFonts({
    PoppinsLight: require('./assets/fonts/Poppins/Poppins-Light.ttf'),
    PoppinsRegular: require('./assets/fonts/Poppins/Poppins-Regular.ttf'),
    PoppinsMedium: require('./assets/fonts/Poppins/Poppins-Medium.ttf'),
    PoppinsSemiBold: require('./assets/fonts/Poppins/Poppins-SemiBold.ttf'),
    PoppinsBold: require('./assets/fonts/Poppins/Poppins-Bold.ttf'),
    PoppinsBlack: require('./assets/fonts/Poppins/Poppins-Black.ttf')
  });

  if(!loaded) {
    return <AppLoading />
  } else {
    return (
      <StoreContextProvider>
        <Root />
      </StoreContextProvider>
    );
  }
};

export default App;