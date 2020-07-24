package errors

import (
	"RemindMe/logger"
)

//checks whether an error occured
//it logs the error
//returns true if an error occured -> otherwise false
func Check(err error) bool {
	if err != nil {
		logger.Error(err.Error())
		return true
	}

	return false
}

//checks whether an error occured
//if yes -> the server will panic
func CheckFatal(err error) {
	if err != nil {
		logger.Fatal(err.Error())
		panic(err)
	}
}