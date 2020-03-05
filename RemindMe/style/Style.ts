import { StyleSheet } from "react-native";
import { Theme } from "./ThemeHolder";

export default class Style{
  public static getStyle(theme: Theme): any{
    return StyleSheet.create({
      app: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
      },
      loginContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        backgroundColor: theme.background,
        flexDirection: 'column',
        justifyContent: "space-evenly"
      },
      loginHeadline: {
        color: theme.primary,
        fontSize: 60,
        fontFamily: 'Anton-Regular',
        textAlign: 'center',
        paddingTop: 30,
        paddingBottom: 30
      },
      loginInputContainer: {
        textAlign: "center",
        width: '100%',
        height: 'auto',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
      },
      loginItemContainer: {
        width: '80%',
        height: 'auto',
        marginTop: 40
      },
      defaultInputDark: {
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: 'auto',
        width: '80%',
        height: 'auto',
        fontSize: 18,
        textAlign: 'left',
        color: theme.foreground_dark,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 12,
        paddingRight: 12,
        borderBottomColor: theme.foreground_dark,
        borderBottomWidth: 1
      },
      defaultButtonPrimary: {
        width: '100%',
        height: 'auto',
        backgroundColor: theme.primary,
        padding: 13,
        borderRadius: 4
      },
      defaultButtonPrimaryText: {
        textAlign: 'center',
        color: theme.foreground_light,
        textTransform: 'uppercase',
        fontSize: 18
      },
      defaultLink: {
        fontSize: 15,
        color: theme.foreground_dark,
        textAlign: 'center'
      },
      spaceTop: {
        marginTop: 20
      },
      spaceBottom: {
        marginBottom: 20
      },
      colorPrimary: {
        color: theme.primary
      }
    });
  }
}