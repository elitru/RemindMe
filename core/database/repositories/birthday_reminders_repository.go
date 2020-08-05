package repositories

import (
	"RemindMe/database/query_reader"
	"RemindMe/errors"
	"RemindMe/logger"
	models "RemindMe/models/database"
	"database/sql"
	"time"
)

//global access to gender repository
var BirthdayReminders *BirthdayReminderRepository = nil

//name of the gender repository directory containing all the sql scripts
var birthday_reminders_repository_directory = "birthday_reminders_repository/"

//the definition of the genders repository
type BirthdayReminderRepository struct {
	//connection to the database
	db *sql.DB
}

/*
	==============================
	All repository implementations
	==============================
*/

//retrieves all reminders for a given user
func (reminders *BirthdayReminderRepository) GetAll(userId string) ([]models.BirthdayReminder, error) {
	query, err := query_reader.GetSQLQuery(birthday_reminders_repository_directory + "get_all.sql")

	//check for error while reading sql query
	if err != nil {
		return []models.BirthdayReminder{}, err
	}

	var birthdayReminders []models.BirthdayReminder

	//query from database
	rows, err := (*reminders).db.Query(query, userId)

	//handle errors
	if err != nil {
		if err == sql.ErrNoRows {
			//no genders found
			logger.Info("No genders found!")
			return birthdayReminders, nil
		}

		errors.Check(err)
		return birthdayReminders, err
	}

	//parse results
	for rows.Next() {
		reminder, err := reminders.mapToStruct(rows)

		if errors.Check(err) {
			return []models.BirthdayReminder{}, err
		}

		birthdayReminders = append(birthdayReminders, reminder)
	}

	return birthdayReminders, nil
}

//get a single reminder by a given reminder id
func (reminders *BirthdayReminderRepository) Get(reminderId string) (models.BirthdayReminder, error) {
	query, err := query_reader.GetSQLQuery(birthday_reminders_repository_directory + "get_by_id.sql")

	//check for error while reading sql query
	if errors.Check(err) {
		return models.BirthdayReminder{}, err
	}

	//select from database
	row := (*reminders).db.QueryRow(query, reminderId)
	reminder, err := reminders.mapToStruct(row)

	if errors.Check(err) {
		return models.BirthdayReminder{}, err
	}

	return reminder, nil
}

//saves a new reminder entry into the database
func (reminders *BirthdayReminderRepository) Create(userId, image, firstname, lastname, nickname string, birthdate time.Time) (reminderId string, err error) {
	return "", nil
}

//maps a given sql result row into a birthday reminder struct
func (reminders *BirthdayReminderRepository) mapToStruct(row SqlResultRow) (models.BirthdayReminder, error) {
	var reminder models.BirthdayReminder

	//parse into struct
	err := row.Scan(&reminder.ReminderId,
		&reminder.Image,
		&reminder.Active,
		&reminder.CreatedOn,
		&reminder.UserId,
		&reminder.BirthDate,
		&reminder.FirstName,
		&reminder.LastName,
		&reminder.NickName)

	//check for errors while parsing
	if err != nil {
		return models.BirthdayReminder{}, err
	}

	return reminder, nil
}