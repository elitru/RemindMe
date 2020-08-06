package requests

import (
	"RemindMe/error_responses"
	"RemindMe/utils/regex"
	"regexp"
	"time"
)

type UpdateBirthdayReminderRequest struct {
	ReminderId string    `json:"reminderId"`
	Image      string    `json:"image"`
	BirthDate  time.Time `json:"birthDate"`
	FirstName  string    `json:"firstName"`
	LastName   string    `json:"lastName"`
	NickName   string    `json:"nickName"`
}

func (request *UpdateBirthdayReminderRequest) Validate() (bool, int) {
	//check for required text fields
	if len(request.ReminderId) == 0 || len(request.Image) == 0 ||
		len(request.FirstName) == 0 || len(request.LastName) == 0 {
		return false, error_responses.MISSING_FIELDS
	}

	//validate name
	match, _ := regexp.MatchString(regex.NAME, request.FirstName+" "+request.LastName)
	if !match {
		return false, error_responses.NAME_INVALID
	}

	return true, -1
}
