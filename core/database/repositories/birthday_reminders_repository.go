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

//retrieves all birthdayReminders for a given user
func (birthdayReminders *BirthdayReminderRepository) GetAll(userId string) ([]models.BirthdayReminder, error) {
	query, err := query_reader.GetSQLQuery(birthday_reminders_repository_directory + "get_all.sql")

	//check for error while reading sql query
	if err != nil {
		return []models.BirthdayReminder{}, err
	}

	var birthdaybirthdayReminders []models.BirthdayReminder

	//query from database
	rows, err := (*birthdayReminders).db.Query(query, userId)

	//handle errors
	if err != nil {
		if err == sql.ErrNoRows {
			//no genders found
			logger.Info("No genders found!")
			return birthdaybirthdayReminders, nil
		}

		errors.Check(err)
		return birthdaybirthdayReminders, err
	}

	//parse results
	for rows.Next() {
		reminder, err := birthdayReminders.mapToStruct(rows)

		if errors.Check(err) {
			return []models.BirthdayReminder{}, err
		}

		birthdaybirthdayReminders = append(birthdaybirthdayReminders, reminder)
	}

	return birthdaybirthdayReminders, nil
}

//get a single reminder by a given reminder id
func (birthdayReminders *BirthdayReminderRepository) Get(reminderId string) (models.BirthdayReminder, error) {
	query, err := query_reader.GetSQLQuery(birthday_reminders_repository_directory + "get_by_id.sql")

	//check for error while reading sql query
	if errors.Check(err) {
		return models.BirthdayReminder{}, err
	}

	//select from database
	row := (*birthdayReminders).db.QueryRow(query, reminderId)
	reminder, err := birthdayReminders.mapToStruct(row)

	if errors.Check(err) {
		return models.BirthdayReminder{}, err
	}

	return reminder, nil
}

//saves a new reminder entry into the database
func (birthdayReminders *BirthdayReminderRepository) Create(userId, image, firstname, lastname, nickname string, birthdate time.Time) (reminderId string, err error) {
	//create base reminder entry
	reminderId, err = (*reminders).Create(image, userId)

	//check for errors that might have occurred during insertion
	if err != nil {
		return "", err
	}

	//after the base reminder has been created successfully -> create the birthday reminder entry
	query, err := query_reader.GetSQLQuery(birthday_reminders_repository_directory + "create.sql")

	//check for error while reading sql query
	if errors.Check(err) {
		return "", err
	}

	err = (*birthdayReminders).db.QueryRow(query,
											 reminderId,
											 birthdate,
											 firstname,
											 lastname,
											 nickname).Scan(&reminderId)

	if errors.Check(err) {
		return "", err
	}

	return reminderId, nil
}

//updates an existing birthday reminder entry
func (birthdayReminders *BirthdayReminderRepository) Update(reminder *models.BirthdayReminder) error {
	//update base reminder entry
	err := (*reminders).Update(reminder.ReminderId, reminder.Image, reminder.Active)

	if errors.Check(err) {
		return err
	}

	//afterwards update birthday reminder entry
	query, err := query_reader.GetSQLQuery(birthday_reminders_repository_directory + "create.sql")

	//check for error while reading sql query
	if errors.Check(err) {
		return err
	}

	//update database
	_, err = (*birthdayReminders).db.Exec(query,
										  reminder.FirstName,
										  reminder.LastName,
										  reminder.NickName,
										  reminder.BirthDate,
										  reminder.ReminderId)
	if errors.Check(err) {
		return err
	}

	return nil
}

//maps a given sql result row into a birthday reminder struct
func (birthdayReminders *BirthdayReminderRepository) mapToStruct(row SqlResultRow) (models.BirthdayReminder, error) {
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