package database

type BirthdayNotification struct {
	NotificationId string
	Reminder       BirthdayReminder
	RemindBefore   float64
}

type AnniversaryNotification struct {
	NotificationId string
	Reminder       AnniversaryReminder
	RemindBefore   float64
}
