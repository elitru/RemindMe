package middleware

import (
	"RemindMe/error_responses"
	"RemindMe/jwt"
	"RemindMe/models/responses"
	"net/http"
)

//middleware for checking whether a user is validly logged in and has permission to access a given route
//access token must be sent in a custom header field called 'auth-header'
func WithAuthentication(next func(w http.ResponseWriter, r *http.Request, userId string)) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		//read token from header
		token := r.Header.Get("auth-header")

		if token == "" {
			responses.Error(&w, error_responses.UNAUTHORIZED, http.StatusUnauthorized)
			return
		}

		//check if token is valid
		userId, err := jwt.DecodeToken(token)

		//check if token is valid
		if err != nil {
			responses.Error(&w, error_responses.UNAUTHORIZED, http.StatusUnauthorized)
			return
		}

		//call next handler
		next(w, r, userId)
	})
}