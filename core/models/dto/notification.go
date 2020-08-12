package dto

type NotificationDTO struct {
	NotificationId string  `json:"notificationId"`
	ReminderId     string  `json:"reminderId"`
	RemindBefore   float64 `json:"remindBefore"`
}
