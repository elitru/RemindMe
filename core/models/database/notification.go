package database

import "RemindMe/models/dto"

type Notification struct {
	NotificationId string
	ReminderId     string
	RemindBefore   float64
	UserId         string
}

func (notification *Notification) MapToDTO() dto.NotificationDTO {
	return dto.NotificationDTO{
		NotificationId: notification.NotificationId,
		ReminderId: notification.ReminderId,
		RemindBefore: notification.RemindBefore,
	}
}