package database

import "time"

type AnniversaryReminder struct {
	ReminderId string
	CreatedOn  time.Time
	Active     bool
	Image      string
	User       User
	EventDate  time.Time
	EventSince time.Time
	Title      string
}
