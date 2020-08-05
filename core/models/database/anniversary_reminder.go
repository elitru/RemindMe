package database

import "time"

type AnniversaryReminder struct {
	ReminderId string
	CreatedOn  time.Time
	Active     bool
	Image      string
	UserId     string
	EventDate  time.Time
	EventSince time.Time
	Title      string
}
