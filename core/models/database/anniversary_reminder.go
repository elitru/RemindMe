package database

import "time"

type AnniversaryReminder struct {
	ReminderId string    `json:"reminder_id"`
	CreatedOn  time.Time `json:"created_on"`
	Active     bool      `json:"active"`
	Image      string    `json:"image"`
	User       User      `json:"user"`
	EventDate  time.Time `json:"event_date"`
	EventSince time.Time `json:"event_since"`
	Title      string    `json:"title"`
}
