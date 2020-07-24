package logger

import (
	"RemindMe/config"
	"fmt"
	"time"
)

//send debug messages
func Debug(msg string) {
	if config.Config().LogLevel > 0 {
		return
	}
	fmt.Println(getTime() + "(INF) -> " + msg)
}

//logs an info
func Info(msg string) {
	if config.Config().LogLevel > 1 {
		return
	}
	fmt.Println(getTime() + "(INF) -> " + msg)
}

//logs a warning
func Warning(msg string) {
	if config.Config().LogLevel > 2 {
		return
	}
	fmt.Println(getTime() + "(WAR) -> " + msg)
}

//logs en error message
func Error(msg string) {
	if config.Config().LogLevel > 3 {
		return
	}
	fmt.Println(getTime() + "(ERR) -> " + msg)
}

//logs en error message
func Fatal(msg string) {
	if config.Config().LogLevel > 4 {
		return
	}
	fmt.Println(getTime() + "(FAT) -> " + msg)
}

//returns the prefix for the logger (the current date + time)
func getTime() string {
	time := time.Now()
	return "[" + time.Format("Mon, 02 Jan 2006 15:04:05 MST") + "] "
}