package requests

import (
	"RemindMe/error_responses"
	"RemindMe/utils/regex"
	"regexp"
)

type ChangePasswordRequest struct {
	NewPassword string `json:"newPassword"`
}

func (request *ChangePasswordRequest) Validate() (bool, int){
	if len(request.NewPassword) == 0 {
		return false, error_responses.MISSING_FIELDS
	}

	//validate password
	match, _ := regexp.MatchString(regex.PASSWORD, request.NewPassword)
	if match {
		return false, error_responses.PASSWORD_INVALID
	}

	return true, -1
}