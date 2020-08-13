import React from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react';
import { useStore } from '../providers/store-context-provider';
import { Authentication } from './Authentication/Authentication';

interface Props {
    
}

export const Root = observer((props: Props) => {
  const store = useStore();

  return (
    <>
      {
        !store.userProvider.isUserLoggedIn ? <Authentication /> : null
      }
    </>  
  );
});