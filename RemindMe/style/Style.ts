import { StyleSheet } from "react-native";
import { Theme } from "./ThemeHolder";

export default class Style{
  public static getStyle(theme: Theme): any{
    return StyleSheet.create({
      app: {
        width: '100%',
        height: '100%',
        backgroundColor: theme.background
      },
      test: {
        color: theme.foreground_light
      }
    });
  }
}