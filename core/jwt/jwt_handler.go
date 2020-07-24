package jwt

import (
	"RemindMe/config"
	"RemindMe/errors"
	"RemindMe/models/database"
	"github.com/dgrijalva/jwt-go"
	"os"
)

//Generates an JWT access token according to a given user
//this token NEVER expires
func GetToken(user *database.User) string {
	os.Setenv("ACCESS_SECRET", config.Config().JWTConfig.Secret)

	claims := jwt.MapClaims{}
	claims["authorized"] = true
	claims["user_id"] = user.UserId

	at := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	token, err := at.SignedString([]byte(os.Getenv("ACCESS_SECRET")))

	errors.CheckFatal(err)

	return token
}

//Decodes a given JWT access token and returns the user id
//if an error occurs during decoding -> error will be returned
func DecodeToken(token string) (string, error) {
	claims := jwt.MapClaims{}
	_, err := jwt.ParseWithClaims(token, claims, func(token *jwt.Token) (interface{}, error) {
		return []byte(config.Config().JWTConfig.Secret), nil
	})

	if err != nil {
		return "", err
	}

	return claims["user_id"].(string), nil
}