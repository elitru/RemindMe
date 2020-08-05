package birthday_reminders

import (
	"RemindMe/models/requests"
	"net/http"
)

//Endpoint for creating a new birthday reminder entry
func CreateReminder(w http.ResponseWriter, r *http.Request, userId string) {
	var createRequest requests.CreateBirthdayReminderRequest

	//parse & validate body
	if !requests.GetBody(&w, r, &createRequest) {
		return
	}

	//save reminder entry to database
}