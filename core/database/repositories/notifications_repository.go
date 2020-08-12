package repositories

import (
	"RemindMe/database/query_reader"
	"RemindMe/errors"
	"RemindMe/logger"
	models "RemindMe/models/database"
	"database/sql"
	"github.com/google/uuid"
)

//global access to gender repository
var Notifications *NotificationRepository = nil

//name of the gender repository directory containing all the sql scripts
var notification_repository_directory = "notification_repository/"

//the definition of the genders repository
type NotificationRepository struct {
	//connection to the database
	db *sql.DB
}

/*
	==============================
	All repository implementations
	==============================
*/

//retrieves all notifications for a given user
func (notifications *NotificationRepository) GetAll(userId string) ([]models.Notification, error) {
	query, err := query_reader.GetSQLQuery(notification_repository_directory + "get_all.sql")

	//check for error while reading sql query
	if err != nil {
		return []models.Notification{}, err
	}

	var retrievedNotifications []models.Notification

	//query from database
	rows, err := (*notifications).db.Query(query, userId)

	//handle errors
	if err != nil {
		if err == sql.ErrNoRows {
			//no genders found
			logger.Info("No notifications found!")
			return retrievedNotifications, nil
		}

		errors.Check(err)
		return retrievedNotifications, err
	}

	//parse results
	for rows.Next() {
		reminder, err := notifications.mapToStruct(rows)

		if errors.Check(err) {
			return []models.Notification{}, err
		}

		retrievedNotifications = append(retrievedNotifications, reminder)
	}

	return retrievedNotifications, nil
}

//retrieves all notifications for a given user & reminder
func (notifications *NotificationRepository) GetAllFor(userId string, reminderId string) ([]models.Notification, error) {
	query, err := query_reader.GetSQLQuery(notification_repository_directory + "get_all_for.sql")

	//check for error while reading sql query
	if err != nil {
		return []models.Notification{}, err
	}

	var retrievedNotifications []models.Notification

	//query from database
	rows, err := (*notifications).db.Query(query, userId, reminderId)

	//handle errors
	if err != nil {
		if err == sql.ErrNoRows {
			//no genders found
			logger.Info("No notifications found!")
			return retrievedNotifications, nil
		}

		errors.Check(err)
		return retrievedNotifications, err
	}

	//parse results
	for rows.Next() {
		reminder, err := notifications.mapToStruct(rows)

		if errors.Check(err) {
			return []models.Notification{}, err
		}

		retrievedNotifications = append(retrievedNotifications, reminder)
	}

	return retrievedNotifications, nil
}

//retrieves a single notification by its id
func (notifications *NotificationRepository) Get(notificationId string) (models.Notification, error) {
	query, err := query_reader.GetSQLQuery(birthday_reminders_repository_directory + "get_by_id.sql")

	//check for error while reading sql query
	if errors.Check(err) {
		return models.Notification{}, err
	}

	//select from database
	row := (*notifications).db.QueryRow(query, notificationId)
	notification, err := notifications.mapToStruct(row)

	if errors.Check(err) {
		return models.Notification{}, err
	}

	return notification, nil
}

//retrieves notifications for a given reminder and a given remindBefore time
func (notifications *NotificationRepository) GetByReminderAndTime(reminderId string, remindBefore float64) (models.Notification, error) {
	query, err := query_reader.GetSQLQuery(birthday_reminders_repository_directory + "get_by_reminder_and_time.sql")

	//check for error while reading sql query
	if errors.Check(err) {
		return models.Notification{}, err
	}

	row := (*notifications).db.QueryRow(query, reminderId, remindBefore)
	notification, err := notifications.mapToStruct(row)

	if errors.Check(err) {
		return models.Notification{}, err
	}

	return notification, err
}

//deletes an existing notification entry according to it id
func (notifications *NotificationRepository) Delete(notificationId string) error {
	query, err := query_reader.GetSQLQuery(notification_repository_directory + "update.sql")

	//check for error while reading sql query
	if errors.Check(err) {
		return err
	}

	//delete entry from database
	_, err = (*notifications).db.Exec(query, notificationId)

	if errors.Check(err) {
		return err
	}

	return nil
}

//creates a new notification entry for a given reminder
func (notifications *NotificationRepository) Create(reminderId string, remindBefore float64) (notificationId string, err error) {
	query, err := query_reader.GetSQLQuery(notification_repository_directory + "create.sql")

	//check for error while reading sql query
	if errors.Check(err) {
		return "", err
	}

	notificationId = uuid.New().String()
	_, err = (*notifications).db.Exec(query, notificationId, reminderId, remindBefore)

	if errors.Check(err) {
		return "", err
	}

	return notificationId, nil
}

func (notifications *NotificationRepository) mapToStruct(row SqlResultRow) (models.Notification, error){
	var notification models.Notification

	err := row.Scan(&notification.NotificationId,
				    &notification.ReminderId,
				    &notification.RemindBefore,
				    &notification.UserId)

	if err != nil {
		if err == sql.ErrNoRows {
			return models.Notification{}, nil
		}

		return models.Notification{}, err
	}

	return notification, nil
}