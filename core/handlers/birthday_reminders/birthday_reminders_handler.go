package birthday_reminders

import (
	"RemindMe/database/repositories"
	"RemindMe/models/requests"
	"RemindMe/models/responses"
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
	reminderId, err := repositories.BirthdayReminders.Create(userId,
																   createRequest.Image,
																   createRequest.FirstName,
																   createRequest.LastName,
																   createRequest.NickName,
																   createRequest.BirthDate)

	//handle database errors
	if responses.DatabaseError(&w, err) { return }

	//get whole reminder entry
	reminder, err := repositories.BirthdayReminders.Get(reminderId)

	//handle database errors
	if responses.DatabaseError(&w, err) { return }

	//send success response
	response := responses.BirthdayReminderCreatedResponse{BirthdayReminder:reminder.MapToDTO()}
	response.Send(&w)
}