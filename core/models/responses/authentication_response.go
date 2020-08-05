package responses

import (
	"RemindMe/models/database"
	"RemindMe/models/dto"
	"encoding/json"
	"net/http"
)

type AuthenticationResponse struct {
	User  dto.UserDTO `json:"user"`
	Token string      `json:"token"`
}

//sends the request back to the user after a successful authentication process
func UserAuthenticated(w *http.ResponseWriter, user *database.User, token string) {
	response := AuthenticationResponse{
		User:  user.MapToDTO(),
		Token: token,
	}

	setHeaders(w)

	json.NewEncoder(*w).Encode(response)
}