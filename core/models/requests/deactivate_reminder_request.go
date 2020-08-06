package requests

import "RemindMe/error_responses"

type DeactivateReminderRequest struct {
	ReminderId string `json:"reminderId"`
}

func (request *DeactivateReminderRequest) Validate() (bool, int) {
	if len(request.ReminderId) == 0 {
		return false, error_responses.BODY_INVALID
	}

	return true, -1
}