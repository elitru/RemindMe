import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StoreContextProvider, useStore } from './providers/store-context-provider';
import { Navigation } from './components/Navigation/Navigation';
import { Root } from './components/Root';
import 'mobx-react-lite/batchingForReactDom'

export const App = (props: any) => {
  return (
    <StoreContextProvider>
      <Root />
    </StoreContextProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;