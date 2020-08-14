import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, KeyboardAvoidingView } from 'react-native';
import { useStore } from '../../providers/store-context-provider';
import { Store } from '../../models/store';
import { Theme } from '../../themes/theme';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { Asset } from 'expo-asset';
import { InputContainer } from './InputContainer';
import { Input } from '../Shared/Input';
import { Login } from './Login/Login';

interface Props {

}

export const Authentication = observer((props: Props) => {
    const store = useStore();
    const style = getStyle(store);
    const translations = store.translationsProvider.translation;

    return (
        <View style={style.container}>
            <View style={style.top}>
                <View style={style.logoContainer}>
                    <Image source={store.assetsProvider.Logo} style={style.logo} resizeMode='center' />
                </View>
                <Text style={style.title}>{translations?.AppTitle}</Text>
            </View>
            <View style={style.bottom}>
                <Login />
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
            height: '45%',
            backgroundColor: theme?.primary_1,
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center'
        },
        logoContainer: {
            display: 'flex',
            padding: 30,
            width: '36%',
            height: '36%',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            backgroundColor: theme?.primary_2,
            borderRadius: 100,
            overflow: 'hidden'
        },
        logo: {
            flex: 1,
            width: '100%',
            height: '100%',
            marginLeft: -10
        },
        title: {
            color: theme?.title_foreground,
            fontSize: 50,
            paddingTop: 20,
            fontFamily: "PoppinsMedium"
        },
        bottom: {
            width: '100%',
            height: '55%',
            backgroundColor: theme?.background_primary
        },
        inputContainer: {
            width: '100%',
            height: '100%',
            marginTop: -50
        }
    });
};