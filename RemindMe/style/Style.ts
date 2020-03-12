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
      loginGradient: {
        width: '100%',
        height: '100%'
      },
      loginContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        paddingHorizontal: 40,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        alignContent: 'center',
        textAlignVertical: 'center',
        alignSelf: 'center'
      },
      loginHeadlineContainer: {
        display: 'flex',
        width: '100%',
        flexGrow: 2,
        justifyContent: 'center',
        textAlign: 'left',
        flexDirection: 'column'
      },
      loginHeadline: {
        color: theme.login_headline,
        fontSize: 50,
        fontFamily: 'Roboto-Bold',
        textAlign: 'left',
        paddingTop: 10
      },
      loginSubHeadline: {
        color: theme.login_headline,
        fontSize: 20,
        fontFamily: 'Roboto-Regular',
        textAlign: 'left',
        paddingTop: 10,
        paddingBottom: 20
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
        alignSelf: 'center',
        backgroundColor: '#fff',
        flexGrow: 0,
        paddingHorizontal: 35,
        paddingTop: 35,
        paddingBottom: 45,
        borderRadius: 10
      },
      loginItemContainer: {
        width: '100%',
        height: 'auto',
        marginTop: 40
      },
      loginInput: {
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: 'auto',
        width: '100%',
        height: 'auto',
        fontSize: 18,
        textAlign: 'left',
        color: theme.login_input,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 12,
        paddingRight: 12,
        borderBottomColor: theme.login_input,
        borderBottomWidth: 1,
        fontFamily: 'OpenSans-Regular'
      },
      loginLink: {
        fontSize: 15,
        color: theme.login_link,
        textAlign: 'center',
        fontFamily: 'Roboto-Light',
        paddingTop: 20,
        paddingBottom: 10
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
      },
      reminderGradient: {
        display: 'flex',
        width: '100%',
        flexGrow: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'column'
      },
      reminderContent: {
        display: 'flex',
        width: '100%',
        flexGrow: 1
      },
      reminderMenu: {
        width: '100%',
        height: 65,
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'row',
        textAlign: 'center',
        zIndex: 1000,
        marginBottom: 20
      },
      reminderMenuItem: {
        width: 60,
        height: 60,
        backgroundColor: theme.menubar_background,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        borderRadius: 20,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#fff'
      },
      reminderMenuItemImage: {
        width: 30,
        height: 30
      },
      reminderItemContainer: {
        width: '100%',
        height: 90,
        borderStyle: 'solid',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'row',
        position: 'relative',
        zIndex: 2,
        marginTop: 10
      },
      reminderItemContent: {
        width: '94%',
        height: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'row',
        position: 'relative',
        borderRadius: 8
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
        fontFamily: 'Roboto-Regular',
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
        paddingLeft: 30,
        paddingRight: 30
      },
      reminderEditorHeadline: {
        fontFamily: 'Roboto-Medium',
        textAlign: 'left',
        fontSize: 45,
        color: theme.editor_headline,
        paddingTop: 25,
        paddingBottom: 10
      },
      reminderEditorInput: {
        marginTop: 20,
        marginBottom: 15,
        marginHorizontal: 'auto',
        width: '100%',
        height: 'auto',
        fontSize: 18,
        textAlign: 'left',
        color: theme.editor_color,
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 14,
        paddingRight: 14,
        borderColor: theme.editor_color,
        borderWidth: 2,
        borderRadius: 10,
        fontFamily: 'Roboto-Regular'
      },
      ReminderEditorBirthdate: {
        marginTop: 20,
        marginBottom: 15,
        marginHorizontal: 'auto',
        width: '100%',
        height: 'auto',
        color: theme.editor_color,
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 14,
        paddingRight: 14,
        borderColor: theme.editor_color,
        borderWidth: 2,
        textAlign: 'left',
        borderRadius: 10,
        fontFamily: 'Roboto-Regular'
      },
      ReminderEditorBirthdateText: {
        fontSize: 18,
        textAlign: 'left',
        paddingVertical: 2
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