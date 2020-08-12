package requests

import errorResponses "RemindMe/error_responses"

type CreateNotificationRequest struct {
	ReminderId   string  `json:"remidnerId"`
	RemindBefore float64 `json:"remindeBefore"`
}

func (request *CreateNotificationRequest) Validate() (bool, int) {
	if len(request.ReminderId) == 0 {
		return false, errorResponses.MISSING_FIELDS
	}

	if request.RemindBefore < 0 {
		return false, errorResponses.BODY_INVALID
	}

	return true, -1
}