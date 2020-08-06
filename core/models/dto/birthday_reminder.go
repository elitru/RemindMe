package dto

import "time"

type BirthdayReminderDTO struct {
	ReminderId string    `json:"reminderId"`
	CreatedOn  time.Time `json:"createdOn"`
	Image      string    `json:"image"`
	UserId     string    `json:"userId"`
	BirthDate  time.Time `json:"birthDate"`
	FirstName  string    `json:"firstName"`
	LastName   string    `json:"lastName"`
	NickName   string    `json:"nickName"`
}
