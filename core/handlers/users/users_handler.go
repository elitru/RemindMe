package users

import (
	"RemindMe/database/repositories"
	"RemindMe/encryption"
	errorResponses "RemindMe/error_responses"
	"RemindMe/errors"
	"RemindMe/jwt"
	"RemindMe/logger"
	models "RemindMe/models/database"
	"RemindMe/models/requests"
	"RemindMe/models/responses"
	"net/http"
)

//Endpoint for logging in as a user in order to get a valid access token
func Login(w http.ResponseWriter, r *http.Request) {
	var loginRequest requests.LoginRequest
	//parse & validate body
	if !requests.GetBody(&w, r, &loginRequest) {
		return
	}

	//check given user data
	//get according user from database
	user, err := repositories.Users.GetByEmail(loginRequest.Email)

	//check for database error
	if responses.DatabaseError(&w, err) { return }

	//check if a user with that email even exists
	if user == (models.User{}) {
		responses.Error(&w, errorResponses.USER_NOT_FOUND, http.StatusBadRequest)
		return
	}

	//check password
	correct := encryption.CheckPassword(loginRequest.Password, user.Password)
	if !correct {
		responses.Error(&w, errorResponses.LOGIN_DATA_INVALID, http.StatusForbidden)
		return
	}

	//authentication credentials are correct -> generate JWT
	token, err := jwt.GetToken(user.UserId)

	if errors.Check(err) {
		responses.Error(&w, errorResponses.TOKEN_GENERATION_FAILED, http.StatusInternalServerError)
		return
	}

	//send response
	response := responses.UserAuthenticationResponse{User:user.MapToDTO(), Token:token}
	response.Send(&w)
}

//Endpoint for creating a new user
func Register(w http.ResponseWriter, r *http.Request){
	var registerRequest requests.RegisterRequest
	//parse & validate  body
	if !requests.GetBody(&w, r, &registerRequest) {
		return
	}

	//check if email is already in use
	user, err := repositories.Users.GetByEmail(registerRequest.Email)

	//check for database error
	if responses.DatabaseError(&w, err) { return }

	//check if that email is already in use
	if user != (models.User{}) {
		responses.Error(&w, errorResponses.EMAIL_ALREADY_IN_USE, http.StatusBadRequest)
		return
	}

	//check if gender is valid
	gender, err := repositories.Genders.Get(registerRequest.GenderId)

	//check for database error
	if responses.DatabaseError(&w, err) { return }

	if gender == (models.Gender{}) {
		responses.Error(&w, errorResponses.GENDER_DOES_NOT_EXIST, http.StatusBadRequest)
		return
	}

	hashedPassword := encryption.GetHash(registerRequest.Password)

	//everything valid -> create user
	userId, err := repositories.Users.Create(registerRequest.Email,
		  					  registerRequest.FirstName,
		  					  registerRequest.LastName,
		  					  hashedPassword,
		  					  registerRequest.BirthDate,
		  					  registerRequest.GenderId)

	//check for database errors
	if responses.DatabaseError(&w, err) { return }
	logger.Info(userId)
	//get whole user object for response
	user, err = repositories.Users.Get(userId)

	//check for database errors
	if responses.DatabaseError(&w, err) { return }

	//generate JWT
	token, err := jwt.GetToken(user.UserId)

	if errors.Check(err) {
		responses.Error(&w, errorResponses.TOKEN_GENERATION_FAILED, http.StatusInternalServerError)
		return
	}

	//send response
	response := responses.UserAuthenticationResponse{User:user.MapToDTO(), Token:token}
	response.Send(&w)
}

//Endpoint for deactivating an user account
func Deactivate(w http.ResponseWriter, r *http.Request, userId string) {
	//deactivate account
	user, err := repositories.Users.Get(userId)
	//check for database errors
	if responses.DatabaseError(&w, err) { return }

	//set user inactivate
	user.Active = false

	//update in database
	err = repositories.Users.Update(&user)
	//check for database errors
	if responses.DatabaseError(&w, err) { return }

	//send default success response
	response := responses.DefaultResponse{Status:http.StatusOK}
	response.Send(&w)
}

//Endpoint for changing user password
func ChangePassword(w http.ResponseWriter, r *http.Request, userId string) {
	var changePasswordRequest requests.ChangePasswordRequest
	//parse & validate  body
	if !requests.GetBody(&w, r, &changePasswordRequest) {
		return
	}

	user, err := repositories.Users.Get(userId)

	//check if user evene exists
	if user == (models.User{}) {
		responses.Error(&w, errorResponses.USER_NOT_FOUND, http.StatusBadRequest)
		return
	}

	//check for database errors
	if responses.DatabaseError(&w, err) { return }

	//hash new password
	hashedPassword := encryption.GetHash(changePasswordRequest.NewPassword)

	//update in database
	user.Password = hashedPassword
	repositories.Users.Update(&user)
	//check for database errors
	if responses.DatabaseError(&w, err) { return }

	//send default success response
	response := responses.DefaultResponse{Status:http.StatusOK}
	response.Send(&w)
}