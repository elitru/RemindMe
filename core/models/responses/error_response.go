package responses

import (
	"RemindMe/error_responses"
	"RemindMe/errors"
	"encoding/json"
	"net/http"
)

type ErrorResponse struct {
	ErrorCode      int `json:"errorCode"`
	HttpStatusCode int `json:"httpStatusCode"`
}

//sends an error response
func Error(w *http.ResponseWriter, errorCode, httpCode int) {
	errorReponse := ErrorResponse{
		ErrorCode:      errorCode,
		HttpStatusCode: httpCode,
	}

	setHeaders(w)

	(*w).Header().Set("X-Content-Type-Options", "nosniff")
	(*w).WriteHeader(httpCode)
	json.NewEncoder(*w).Encode(errorReponse)
}

//this function shall be called after an database action has been performed
//if an error occured -> error response ill be returned to the user
func DatabaseError(w *http.ResponseWriter, err error) bool {
	if !errors.Check(err) {
		return false
	}

	Error(w, error_responses.DATABASE_ERROR, http.StatusInternalServerError)
	return true
}