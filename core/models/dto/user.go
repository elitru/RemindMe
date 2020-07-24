package dto

import (
	"RemindMe/error_responses"
	"RemindMe/utils/regex"
	"regexp"
	"time"
)

type UserDTO struct {
	UserId    string    `json:"userId"`
	CreatedOn time.Time `json:"createdOn"`
	FirstName string    `json:"firstName"`
	LastName  string    `json:"lastName"`
	Password  string    `json:"password"`
	Gender    GenderDTO `json:"gender"`
	Email     string    `json:"email"`
}

//validates a user dto and returns whether the object is correct or not
//if the validation does not pass -> error code will be returned as well
func (user *UserDTO) Validate() (bool, int) {
	//validate email
	match, _ := regexp.MatchString(regex.EMAIL, user.Email)
	if !match {
		return false, error_responses.EMAIL_INVALID
	}

	//validate first & lastname
	match, _ = regexp.MatchString(regex.NAME, user.FirstName+" "+user.LastName)
	if !match {
		return false, error_responses.NAME_INVALID
	}

	//validate email
	match, _ = regexp.MatchString(regex.PASSWORD, user.Password)
	if !match {
		return false, error_responses.PASSWORD_INVALID
	}

	return true, -1
}
