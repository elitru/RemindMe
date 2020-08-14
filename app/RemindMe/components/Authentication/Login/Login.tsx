import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useStore } from '../../../providers/store-context-provider';
import { InputContainer } from '../InputContainer';
import { Input } from '../../Shared/Input';
import { Theme } from '../../../themes/theme';
import { Store } from '../../../models/store';
import { TextButton } from '../../Shared/TextButton';

interface Props {

}

export const Login = (props: Props) => {
    const store = useStore();
    const style = getStyle(store);
    const translations = store.translationsProvider.translation;

    return (
        <View style={style.container}>
            <View style={style.inputContainer}>
                <InputContainer title={translations?.SignIn ? translations.SignIn : ''}
                    titleSize={30}
                    withButton={true}
                    buttonText={translations?.Login}
                    buttonWidth={'90%'}
                    buttonWithArrow={true}>
                    <Input title={translations?.Email}
                        placeholder={translations?.EmailPlaceholder}
                        width={'90%'}
                        marginTop={10} />
                    <Input title={translations?.Password}
                        placeholder={translations?.PasswordPlaceholder}
                        width={'90%'}
                        isPassword={true}
                        marginTop={30} />
                </InputContainer>
            </View>
            <View style={style.optionsContainer}>
                <TextButton text={translations?.ForgotPassword}
                            width={'100%'}
                            uppercase={true} />
                <TextButton text={translations?.NoAccountYet}
                            width={'100%'}
                            uppercase={true} />
            </View>
            <Text style={style.copyright}>© RemindMe | 2020 | Elias Trummer</Text>
        </View>
    )
};

const getStyle = (store: Store) => {
    const theme: Theme | null = store.themeProvider.theme;

    return StyleSheet.create({
        container: {
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'flex-start',
            flexDirection: 'column'
        },
        inputContainer: {
            width: '100%',
            height: '100%',
            marginTop: -60
        },
        optionsContainer: {
            marginTop: -50,
            width: '100%',
            height: 'auto',
        },
        copyright: {
            textAlign: 'center',
            fontSize: 12,
            position: 'absolute',
            bottom: 0,
            color: theme?.copyright_color,
            left: 0,
            right: 0,
            height: 30,
            width: '100%'
        }
    });
};