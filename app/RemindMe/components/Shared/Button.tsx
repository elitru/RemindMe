import React, { ReactElement } from 'react'
import { Store } from '../../models/store';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, GestureResponderEvent, Image } from 'react-native';
import { useStore } from '../../providers/store-context-provider';
import { Theme } from '../../themes/theme';

interface Props {
    text: string;
    withArrow: boolean;
    width: number | string;
    enabled?: boolean;
    onClick?: ((event: GestureResponderEvent) => void);
}

export const Button = (props: Props) => {
    const store = useStore();
    const style = getStyle(store, props);

    return (
        <TouchableOpacity style={style.button} onPress={props.onClick ? props.onClick : undefined}>
            {
                props.withArrow ?
                <Image style={style.arrow} source={store.assetsProvider.Arrow} resizeMode='center' /> :
                null
            }
            <Text style={style.text}>{ props.text }</Text>
        </TouchableOpacity>
    )
};

const getStyle = (store: Store, props: Props) => {
    const theme: Theme | null = store.themeProvider.theme;

    return StyleSheet.create({
        button: {
            width: props.width,
            backgroundColor: theme?.button_background,
            paddingVertical: 17,
            borderWidth: 0,
            borderRadius: 100,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            flexDirection: 'row'
        },
        text: {
            color: theme?.button_foreground,
            textAlign: 'center',
            fontFamily: 'PoppinsMedium',
            textTransform: 'uppercase',
            fontSize: 15
        },
        arrow: {
            width: 26,
            height: 25,
            marginTop: -3,
            marginRight: 10,
            marginLeft: -10
        }
    });
}