package requests

import (
	"RemindMe/error_responses"
	"RemindMe/models/responses"
	"encoding/json"
	"net/http"
)

type Request interface {
	Validate() (bool, int)
}

//parses the body of an request and validates it
//if an error occurred during parsing ot validation -> error response will be sent
func GetBody(w *http.ResponseWriter, r *http.Request, bodyHolder Request) bool {
	//decode body
	err := json.NewDecoder(r.Body).Decode(&bodyHolder)

	//check for parsing errors
	if err != nil {
		responses.Error(w, error_responses.BODY_INVALID, http.StatusBadRequest)
		return false
	}

	//validate given body
	valid, errorCode := bodyHolder.Validate()
	if !valid {
		responses.Error(w, errorCode, http.StatusBadRequest)
		return false
	}

	return true
}