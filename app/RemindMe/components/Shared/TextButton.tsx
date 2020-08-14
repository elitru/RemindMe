import React, { ReactElement } from 'react'
import { Store } from '../../models/store';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, GestureResponderEvent, Image } from 'react-native';
import { useStore } from '../../providers/store-context-provider';
import { Theme } from '../../themes/theme';

interface Props {
    text?: string;
    width: number | string;
    enabled?: boolean;
    fontSize?: number;
    uppercase?: boolean;
    onClick?: ((event: GestureResponderEvent) => void);
    marginTop?: number;
}

export const TextButton = (props: Props) => {
    const store = useStore();
    const style = getStyle(store, props);

    return (
        <TouchableOpacity style={style.button} onPress={props.onClick ? props.onClick : undefined}>
            <Text style={style.text}>{ props.text }</Text>
        </TouchableOpacity>
    )
};

const getStyle = (store: Store, props: Props) => {
    const theme: Theme | null = store.themeProvider.theme;

    return StyleSheet.create({
        button: {
            width: props.width,
            backgroundColor: 'transparent',
            paddingVertical: 3,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            flexDirection: 'row',
            marginTop: props.marginTop ? props.marginTop : 0
        },
        text: {
            color: theme?.text_button_foreground,
            textAlign: 'center',
            fontFamily: 'PoppinsSemiBold',
            textTransform: props.uppercase  ? 'uppercase' : 'none',
            fontSize: props.fontSize ? props.fontSize : 14
        }
    });
}