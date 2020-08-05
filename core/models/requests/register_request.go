package requests

import (
	"RemindMe/error_responses"
	"RemindMe/utils/regex"
	"regexp"
	"time"
)

type RegisterRequest struct {
	FirstName string    `json:"firstName"`
	LastName  string    `json:"lastName"`
	GenderId  int       `json:"genderId"`
	Email     string    `json:"email"`
	BirthDate time.Time `json:"birthDate"`
	Password  string    `json:"password"`
}

func (request *RegisterRequest) Validate() (bool, int) {
	//check if all fields are given
	if len(request.FirstName) == 0 || len(request.LastName) == 0 ||
		len(request.Email) == 0 || len(request.Password) == 0 {
		return false, error_responses.MISSING_FIELDS
	}

	//validate birthdate
	if request.BirthDate.Year() < 1920 {
		return false, error_responses.BIRTHDATE_INVALID
	}

	//validate email
	match, _ := regexp.MatchString(regex.EMAIL, request.Email)
	if !match {
		return false, error_responses.EMAIL_INVALID
	}

	//validate first & lastname
	match, _ = regexp.MatchString(regex.NAME, request.FirstName+" "+request.LastName)
	if !match {
		return false, error_responses.NAME_INVALID
	}

	//validate password
	match, _ = regexp.MatchString(regex.PASSWORD, request.Password)
	if match {
		return false, error_responses.PASSWORD_INVALID
	}

	return true, -1
}
