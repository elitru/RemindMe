import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { useStore } from '../../providers/store-context-provider';
import { Store } from '../../models/store';
import { Theme } from '../../themes/theme';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { Asset } from 'expo-asset';

interface Props {
    
}

export const Authentication = observer((props: Props) => {
    const store = useStore();
    const style = getStyle(store);

    return (
        <View style={style.container}>
            <View style={style.top}>
                
            </View>
            <View style={style.bottom}>
            
            </View>
        </View>
    );
});

const getStyle = (store: Store) => {
    const theme: Theme | null = store.themeProvider.theme;

    return StyleSheet.create({
        container: {
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        },
        top: {
            width: '100%',
            height: '50%',
            backgroundColor: store.themeProvider.theme?.primary_1
        },
        bottom: {
            width: '100%',
            height: '50%',
            backgroundColor: theme?.background_primary
        }
    });
};