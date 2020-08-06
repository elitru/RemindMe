package responses

import (
	"RemindMe/models/dto"
	"encoding/json"
	"net/http"
)

type BirthdayReminderCreatedResponse struct {
	BirthdayReminder dto.BirthdayReminderDTO `json:"birthdayReminder"`
}

//sends the according response
func (response *BirthdayReminderCreatedResponse) Send(w *http.ResponseWriter) {
	setHeaders(w)
	json.NewEncoder(*w).Encode(*response)
}