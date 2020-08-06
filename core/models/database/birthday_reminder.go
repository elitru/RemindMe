package database

import (
	"RemindMe/models/dto"
	"time"
)

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

func (reminder *BirthdayReminder) MapToDTO() dto.BirthdayReminderDTO {
	return dto.BirthdayReminderDTO{
		ReminderId: reminder.ReminderId,
		CreatedOn:  reminder.CreatedOn,
		Image:      reminder.Image,
		UserId:     reminder.UserId,
		BirthDate:  reminder.BirthDate,
		FirstName:  reminder.FirstName,
		LastName:   reminder.LastName,
		NickName:   reminder.NickName,
	}
}