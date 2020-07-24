package auth

import (
	"RemindMe/error_responses"
	"RemindMe/models/requests"
	"RemindMe/models/responses"
	"encoding/json"
	"net/http"
)

//Endpoint for logging in as a user in order to get a valid access token
func Authenticate(w http.ResponseWriter, r *http.Request) {
	var loginRequest requests.LoginRequest

	//decode body
	err := json.NewDecoder(r.Body).Decode(&loginRequest)

	//check for parsing errors
	if err != nil {
		responses.Error(&w, error_responses.BODY_INVALID, http.StatusBadRequest)
		return
	}

	//validate given body
	valid, errorCode := loginRequest.Validate()
	if !valid {
		responses.Error(&w, errorCode, http.StatusBadRequest)
		return
	}

	//TODO: check given user data
}