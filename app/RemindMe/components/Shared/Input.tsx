import React, { ReactElement } from 'react'
import { Store } from '../../models/store';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { useStore } from '../../providers/store-context-provider';
import { Theme } from '../../themes/theme';

interface Props {
    title?: string;
    placeholder?: string;
    width: number | string;
    marginTop: number;
    onChangeText?: ((text: string) => void);
    isPassword?: boolean;
}

export const Input = (props: Props) => {
    const store = useStore();
    const style = getStyle(store, props);

    return (
        <View style={style.container}>
            <Text style={style.title}>{ props.title }</Text>
            <TextInput placeholder={props.placeholder} 
                       style={style.input} 
                       secureTextEntry={props.isPassword}
                       placeholderTextColor={store.themeProvider.theme?.input_placeholder_foreground}
                       onChangeText={props.onChangeText}></TextInput>
        </View>
    )
};

const getStyle = (store: Store, props: Props) => {
    const theme: Theme | null = store.themeProvider.theme;

    return StyleSheet.create({
        container: {
            marginTop: props.marginTop,
            width: props.width,
            display: 'flex',
            justifyContent: 'flex-start',
            alignContent: 'flex-start',
            alignItems: 'flex-start',
            flexDirection: 'column'
        },
        title: {
            color: theme?.input_container_title,
            fontSize: 14,
            textTransform: 'uppercase',
            fontFamily: 'PoppinsMedium',
            paddingBottom: 5
        },
        input: {
            width: '100%',
            color: theme?.input_color_foreground,
            borderColor: theme?.input_placeholder_foreground,
            borderTopWidth: 0,
            borderRightWidth: 0,
            borderLeftWidth: 0,
            borderBottomWidth: 1,
            fontFamily: 'PoppinsRegular',
            fontSize: 15,
            paddingTop: 5,
            paddingBottom: 4,
            paddingHorizontal: 10
        }
    });
}