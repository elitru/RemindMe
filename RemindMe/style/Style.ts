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
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        //backgroundColor: theme.background,
        flexDirection: 'column'
      },
      reminderGradient: {
        display: 'flex',
        width: '100%',
        flexGrow: 1,
      },
      reminderContent: {
        display: 'flex',
        width: '100%',
        flexGrow: 1
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
        textAlign: 'center',
        zIndex: 1000
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