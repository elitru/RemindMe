package responses

import (
	"RemindMe/models/dto"
	"encoding/json"
	"net/http"
)

type UserAuthenticationResponse struct {
	User  dto.UserDTO `json:"user"`
	Token string      `json:"token"`
}

//sends the request back to the user after a successful authentication process
func (response *UserAuthenticationResponse) Send(w *http.ResponseWriter) {
	setHeaders(w)
	json.NewEncoder(*w).Encode(*response)
}