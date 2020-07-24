package database

type BirthdayNotification struct {
	NotificationId string           `json:"notification_id"`
	Reminder       BirthdayReminder `json:"reminder"`
	RemindBefore   float64          `json:"remind_before"`
}

type AnniversaryNotification struct {
	NotificationId string              `json:"notification_id"`
	Reminder       AnniversaryReminder `json:"reminder"`
	RemindBefore   float64             `json:"remind_before"`
}