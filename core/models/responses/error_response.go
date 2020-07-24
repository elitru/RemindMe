package responses

import (
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

	//parse response to json
	json, err := json.Marshal(errorReponse)

	//check for errors
	errors.CheckFatal(err)

	//send error response
	http.Error(*w, string(json), errorCode)
}
