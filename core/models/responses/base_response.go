package responses

import (
	"encoding/json"
	"net/http"
)

type DefaultResponse struct {
	Status int `json:"status"`
}

//sends a default response just containing the status code
func BaseResponse(w *http.ResponseWriter, status int) {
	response := DefaultResponse{
		Status: status,
	}

	setHeaders(w)
	json.NewEncoder(*w).Encode(response)
}

//set the response headers of all http responses
func setHeaders(w *http.ResponseWriter) {
	(*w).Header().Set("Content-Type", "application/json; charset=utf-8")
}