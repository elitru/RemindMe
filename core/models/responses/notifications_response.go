package responses

import (
	"RemindMe/models/dto"
	"encoding/json"
	"net/http"
)

type NotificationsResponse struct {
	Notifications []dto.NotificationDTO `json:"notifications"`
}

//sends the according response
func (response *NotificationsResponse) Send(w *http.ResponseWriter) {
	setHeaders(w)
	json.NewEncoder(*w).Encode(*response)
}