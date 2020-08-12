package requests

import errorResponses "RemindMe/error_responses"

type DeleteNotificationRequest struct {
	NotificationId string `json:"notificationId"`
}

func (request *DeleteNotificationRequest) Validate() (bool, int) {
	if len(request.NotificationId) == 0 {
		return false, errorResponses.MISSING_FIELDS
	}

	return true, -1
}