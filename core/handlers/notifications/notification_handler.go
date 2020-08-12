package notifications

import (
	"RemindMe/database/repositories"
	errorResponses "RemindMe/error_responses"
	models "RemindMe/models/database"
	"RemindMe/models/dto"
	"RemindMe/models/requests"
	"RemindMe/models/responses"
	"github.com/gorilla/mux"
	"net/http"
)

//Endpoint for retrieving all notification entry for a given reminder
func GetAllForReminder(w http.ResponseWriter, r *http.Request, userId string) {
	//get reminder id from path
	vars := mux.Vars(r)
	reminderId := vars["reminderId"]

	//check if paramater valid
	if len(reminderId) == 0 {
		responses.Error(&w, errorResponses.MISSING_FIELDS, http.StatusBadRequest)
		return
	}

	//check if reminder even belongs to given user
	reminder, err := repositories.Reminders.Get(reminderId)
	//handle database errors
	responses.DatabaseError(&w, err)
	//check permission
	if reminder.UserId != userId {
		responses.Error(&w, errorResponses.MISSING_PERMISSION, http.StatusUnauthorized)
		return
	}

	//get all notification entries
	notifications, err := repositories.Notifications.GetAllFor(userId, reminderId)
	//handle database errors
	responses.DatabaseError(&w, err)

	//map to dto structs
	var notificationsDTOs []dto.NotificationDTO
	for _, notification := range notifications {
		notificationsDTOs = append(notificationsDTOs, notification.MapToDTO())
	}

	//send response
	response := responses.NotificationsResponse{
		Notifications: notificationsDTOs,
	}
	response.Send(&w)
}

//Endpoint for creating a notification entry for a given reminder
func Create(w http.ResponseWriter, r *http.Request, userId string) {
	var createRequest requests.CreateNotificationRequest

	//parse & validate body
	if !requests.GetBody(&w, r, &createRequest) {
		return
	}

	//check if reminder even belongs to given user
	reminder, err := repositories.Reminders.Get(createRequest.ReminderId)
	//handle database errors
	responses.DatabaseError(&w, err)
	//check permission
	if reminder.UserId != userId {
		responses.Error(&w, errorResponses.MISSING_PERMISSION, http.StatusUnauthorized)
		return
	}

	//check if a notification for the same reminder and the same reminder time already exists
	existingNotification, err := repositories.Notifications.GetByReminderAndTime(createRequest.ReminderId, createRequest.RemindBefore)

	//handle database errors
	responses.DatabaseError(&w, err)

	//check existence
	if existingNotification != (models.Notification{}) {
		responses.Error(&w, errorResponses.NOTIFICATION_ALREADY_EXISTS, http.StatusBadRequest)
		return
	}

	//create new notification entry in database
	notificationId, err := repositories.Notifications.Create(createRequest.ReminderId, createRequest.RemindBefore)

	//handle database errors
	responses.DatabaseError(&w, err)

	//build notification struct directly here instead of asking database
	//because of optimization -> all required data already known
	notificationResponse := dto.NotificationDTO{
		NotificationId: notificationId,
		ReminderId: createRequest.ReminderId,
		RemindBefore: createRequest.RemindBefore,
	}

	//send result
	response := responses.NotificationResponse{Notification: notificationResponse}
	response.Send(&w)
}

//Endpoint for deleting a notification entry
func Delete(w http.ResponseWriter, r *http.Request, userId string) {
	var deleteRequest requests.DeleteNotificationRequest

	//parse & validate body
	if !requests.GetBody(&w, r, &deleteRequest) {
		return
	}

	//check if notification evene belongs to requesting user
	notification, err := repositories.Notifications.Get(deleteRequest.NotificationId)
	//handle database errors
	responses.DatabaseError(&w, err)
	//check permission
	if notification.UserId != userId {
		responses.Error(&w, errorResponses.MISSING_PERMISSION, http.StatusUnauthorized)
		return
	}

	//delete notification entry from database
	err = repositories.Notifications.Delete(deleteRequest.NotificationId)
	//handle database errors
	responses.DatabaseError(&w, err)

	//send default success response
	response := responses.DefaultResponse{Status:http.StatusOK}
	response.Send(&w)
}