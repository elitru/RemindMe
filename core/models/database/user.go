package database

import (
	"RemindMe/models/dto"
	"time"
)

type User struct {
	UserId    string
	CreatedOn time.Time
	FirstName string
	LastName  string
	Password  string
	Gender    Gender
	Active    bool
	Email     string
	BirthDate time.Time
}

func (user *User) MapToDTO() dto.UserDTO {
	return dto.UserDTO{
		UserId:    user.UserId,
		CreatedOn: user.CreatedOn,
		FirstName: user.FirstName,
		LastName:  user.LastName,
		Gender:    user.Gender.MapToDTO(),
		Email:     user.Email,
		BirthDate: user.BirthDate,
	}
}
