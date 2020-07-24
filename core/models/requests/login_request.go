package requests

import "RemindMe/error_responses"

type LoginRequest struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

//validates a login request
func (request *LoginRequest) Validate() (bool, int) {
	//check if all fields are given
	if len(request.Email) == 0 || len(request.Password) == 0 {
		return false, error_responses.MISSING_FIELDS
	}

	return true, -1
}