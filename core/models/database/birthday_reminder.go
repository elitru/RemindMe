package database

import "time"

type BirthdayReminder struct {
	ReminderId string
	CreatedOn  time.Time
	Active     bool
	Image      string
	UserId     string
	BirthDate  time.Time
	FirstName  string
	LastName   string
	NickName   string
}
