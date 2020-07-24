package database

import "time"

type BirthdayReminder struct {
	ReminderId string    `json:"reminder_id"`
	CreatedOn  time.Time `json:"created_on"`
	Active     bool      `json:"active"`
	Image      string    `json:"image"`
	User       User      `json:"user"`
	BirthDate  time.Time `json:"birth_date"`
	FirstName  string    `json:"first_name"`
	LastName   string    `json:"last_name"`
	NickName   string    `json:"nick_name"`
}
