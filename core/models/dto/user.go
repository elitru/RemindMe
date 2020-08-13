package dto

import (
	"time"
)

type UserDTO struct {
	UserId    string    `json:"userId"`
	CreatedOn time.Time `json:"createdOn"`
	FirstName string    `json:"firstName"`
	LastName  string    `json:"lastName"`
	Gender    GenderDTO `json:"gender"`
	Email     string    `json:"email"`
	BirthDate time.Time `json:"birthDate"`
}
