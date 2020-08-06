package database

type Notification struct {
	NotificationId string
	ReminderId     string
	RemindBefore   float64
	UserId         string
}
