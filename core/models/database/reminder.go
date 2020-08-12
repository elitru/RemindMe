package database

import "time"

type Reminder struct {
	ReminderId string
	UserId     string
	Image      string
	CreateOn   time.Time
	Active     bool
}
