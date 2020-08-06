package birthday_reminders

import (
	"RemindMe/database/repositories"
	"RemindMe/error_responses"
	models "RemindMe/models/database"
	"RemindMe/models/requests"
	"RemindMe/models/responses"
	"net/http"
)

//Endpoint for creating a new birthday reminder entry
func Create(w http.ResponseWriter, r *http.Request, userId string) {
	var createRequest requests.CreateBirthdayReminderRequest

	//parse & validate body
	if !requests.GetBody(&w, r, &createRequest) { return }

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
	response := responses.BirthdayReminderResponse{BirthdayReminder:reminder.MapToDTO()}
	response.Send(&w)
}

//Endpoint for updating an existing reminder entry
func Update(w http.ResponseWriter, r *http.Request, userId string) {
	var updateRequest requests.UpdateBirthdayReminderRequest

	//parse & validate body
	if !requests.GetBody(&w, r, &updateRequest) { return }

	//get reminder entry from database
	reminder, err := repositories.BirthdayReminders.Get(updateRequest.ReminderId)

	//check for database errors
	if responses.DatabaseError(&w, err) { return }

	//check if reminder even exists
	if reminder == (models.BirthdayReminder{}) {
		responses.Error(&w, error_responses.REMINDER_ENTRY_NOT_FOUND, http.StatusBadRequest)
		return
	}

	//check if reminder even belongs to user
	if reminder.UserId != userId {
		responses.Error(&w, error_responses.MISSING_PERMISSION, http.StatusForbidden)
		return
	}

	//update reminder model
	reminder.FirstName = updateRequest.FirstName
	reminder.LastName = updateRequest.LastName
	reminder.NickName = updateRequest.NickName
	reminder.BirthDate = updateRequest.BirthDate
	reminder.Image = updateRequest.Image

	//save updates to database
	err = repositories.BirthdayReminders.Update(&reminder)

	//check for database errors
	if responses.DatabaseError(&w, err) { return }

	//send success response
	response := responses.BirthdayReminderResponse{BirthdayReminder:reminder.MapToDTO()}
	response.Send(&w)
}

//Endpoint for deactivating an existing reminder
func Deactivate(w http.ResponseWriter, r *http.Request, userId string) {
	var deactivateRequest requests.DeactivateReminderRequest
	//parse & validate body
	if !requests.GetBody(&w, r, &deactivateRequest) { return }

	reminder, err := repositories.BirthdayReminders.Get(deactivateRequest.ReminderId)

	//check for database errors
	if responses.DatabaseError(&w, err) { return }

	//check if reminder even exists
	if reminder == (models.BirthdayReminder{}) {
		responses.Error(&w, error_responses.REMINDER_ENTRY_NOT_FOUND, http.StatusBadRequest)
		return
	}

	//check if reminder even belongs to user
	if reminder.UserId != userId {
		responses.Error(&w, error_responses.MISSING_PERMISSION, http.StatusForbidden)
		return
	}

	//deactivate reminder
	reminder.Active = false
	//save updates to database
	err = repositories.BirthdayReminders.Update(&reminder)
	//check for database errors
	if responses.DatabaseError(&w, err) { return }

	//send response
	//send default success response
	response := responses.DefaultResponse{Status:http.StatusOK}
	response.Send(&w)
}