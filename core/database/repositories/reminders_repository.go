package repositories

import (
	"RemindMe/database/query_reader"
	"RemindMe/errors"
	"database/sql"
	"github.com/google/uuid"
)

//global access to gender repository
var reminders *ReminderRepository = nil

//name of the gender repository directory containing all the sql scripts
var reminders_repository_directory = "reminders_repository/"

//the definition of the genders repository
type ReminderRepository struct {
	//connection to the database
	db *sql.DB
}

/*
	==============================
	All repository implementations
	==============================
*/

//Create a new reminder entry
func (reminders *ReminderRepository) Create(image, userId string) (reminderId string, err error) {
	query, err := query_reader.GetSQLQuery(reminders_repository_directory + "create.sql")

	//check for error while reading sql query
	if errors.Check(err) {
		return "", err
	}

	err = (*reminders).db.QueryRow(query, uuid.New().String(), image, userId).Scan(&reminderId)

	if errors.Check(err) {
		return "", err
	}

	return reminderId, nil
}

//Update an existing entry
func (reminders *ReminderRepository) Update(reminderId, image string, active bool) error {
	query, err := query_reader.GetSQLQuery(reminders_repository_directory + "update.sql")

	//check for error while reading sql query
	if errors.Check(err) {
		return err
	}

	_, err = (*reminders).db.Exec(query, image, active, reminderId)
	return err
}