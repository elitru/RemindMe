package responses

import (
	"RemindMe/models/dto"
	"encoding/json"
	"net/http"
)

type NotificationResponse struct {
	Notification dto.NotificationDTO `json:"notification"`
}

//sends the according response
func (response *NotificationResponse) Send(w *http.ResponseWriter) {
	setHeaders(w)
	json.NewEncoder(*w).Encode(*response)
}