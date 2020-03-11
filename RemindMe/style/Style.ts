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
        justifyContent: 'center',
        position: 'relative'
      },
      appContent: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      },
      loginContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        backgroundColor: theme.background,
        flexDirection: 'column',
        justifyContent: 'space-evenly'
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
      registerContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        backgroundColor: theme.background,
        flexDirection: 'column',
        justifyContent: 'space-evenly'
      },
      registerHeadline: {
        color: theme.primary,
        fontSize: 60,
        fontFamily: 'Anton-Regular',
        textAlign: 'center',
        paddingTop: 30,
        paddingBottom: 30
      },
      registerInputContainer: {
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
      registerItemContainer: {
        width: '80%',
        height: 'auto',
        marginTop: 40
      },
      loaderContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 100000,
        backgroundColor: theme.primary,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
      },
      loaderGif: {
        width: 60,
        height: 60
      },
      reminderContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: theme.background,
        flexDirection: 'column'
      },
      reminderContent: {
        display: 'flex',
        width: '100%',
        flexGrow: 1,
      },
      reminderMenu: {
        width: '100%',
        height: 65,
        backgroundColor: theme.menubar,
        borderTopColor: theme.menubar_border,
        borderStyle: 'solid',
        borderTopWidth: 1,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'row',
        textAlign: 'center'
      },
      reminderMenuItem: {
        
      },
      reminderMenuItemIcon: {
        color: theme.menubar_foreground
      },
      reminderMenuItemIconActive: {
        color: theme.menubar_foreground_active
      },
      reminderItemContainer: {
        width: '100%',
        height: 90,
        borderBottomColor: theme.reminder_item_border,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'row',
        position: 'relative',
        zIndex: 2
      },
      reminderItemIcon: {
        width: 60,
        height: 60,
        marginLeft: '5%',
      },
      reminderItemTextContainer: {
        marginLeft: '5%'
      },
      reminderItemName: {
        fontSize: 20,
        fontFamily: 'OpenSans-SemiBold',
        color: theme.reminder_item_name
      },
      reminderItemBirthdate: {
        fontSize: 15,
        fontFamily: 'OpenSans-Regular',
        paddingTop: 2,
        color: theme.reminder_item_birthdate
      },
      reminderEditorContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        backgroundColor: theme.background,
        paddingLeft: 30,
        paddingRight: 30
      },
      reminderEditorHeadline: {
        fontFamily: 'OpenSans-SemiBold',
        textAlign: 'left',
        fontSize: 28,
        color: theme.editor_headline,
        paddingTop: 25
      },
      reminderEditorInput: {
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