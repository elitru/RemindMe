package logger

import (
	"fmt"
	"time"
)

var logLevel = 1

//logs an info
func Info(msg string) {
	if logLevel > 1 {
		return
	}
	fmt.Println(getTime() + "(INF) -> " + msg)
}

//logs a warning
func Warning(msg string) {
	if logLevel > 2 {
		return
	}
	fmt.Println(getTime() + "(WAR) -> " + msg)
}

//logs en error message
func Error(msg string) {
	if logLevel > 3 {
		return
	}
	fmt.Println(getTime() + "(ERR) -> " + msg)
}

//logs en error message
func Fatal(msg string) {
	if logLevel > 4 {
		return
	}
	fmt.Println(getTime() + "(FAT) -> " + msg)
}

//returns the prefix for the logger (the current date + time)
func getTime() string {
	time := time.Now()
	return "[" + time.Format("Mon, 02 Jan 2006 15:04:05 MST") + "] "
}