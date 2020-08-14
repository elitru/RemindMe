import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { useStore } from '../../providers/store-context-provider';
import { Store } from '../../models/store';
import { Theme } from '../../themes/theme';
import { Input } from '../Shared/Input';
import { Button } from '../Shared/Button';

interface Props {
    title: string;
    titleSize: number;
    containerSize?: number | string;
    children?: any;
    withButton: boolean;
    buttonText?: string;
    buttonWidth?: number | string;
    buttonWithArrow?: boolean;
    onButtonClick?: Function;
}

export const InputContainer = (props: Props) => {
    const store = useStore();
    const style = getStyle(store, props);
    const translations = store.translationsProvider.translation;

    return (
        <View style={style.container}>
            <View style={style.box}>
                <Text style={style.title}>{props.title}</Text>
                <View style={style.line}></View>
                { props.children }
                { props.withButton ? <View style={style.buttonContainer}><Button text={props.buttonText!} 
                                             withArrow={props.buttonWithArrow!}
                                             width={props.buttonWidth!} /></View> : null}
            </View>
        </View>
    )
};

const getStyle = (store: Store, props: Props) => {
    const theme: Theme | null = store.themeProvider.theme;
    
    return StyleSheet.create({
        container: {
            width: '100%',
            height: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
        },
        box: {
            width: props.containerSize ? props.containerSize : '90%',
            maxWidth: 600,
            paddingVertical: 30,
            paddingHorizontal: 20,
            backgroundColor: theme?.background_secondary,
            borderRadius: 20,
            shadowColor: theme?.drop_shadow,
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.7,
            shadowRadius: 10,
            elevation: 6,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
        },
        title: {
            textAlign: 'center',
            fontSize: props.titleSize,
            color: theme?.input_container_title,
            fontFamily: 'PoppinsSemiBold',
        },
        line: {
            width: '8%',
            minWidth: 40,
            height: 4,
            backgroundColor: theme?.input_container_title,
            margin: 'auto',
            marginTop: 8
        },
        buttonContainer: {
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            paddingTop: 40,
            marginBottom: -60
        }
    });
};