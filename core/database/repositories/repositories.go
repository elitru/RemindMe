package repositories

import "database/sql"

type SqlResultRow interface {
	Scan(dest ...interface{}) error
}

//creates all registered repositories for the web service
func Init(dbConnection *sql.DB) {
	Users = &UserRepository{db: dbConnection}
	Genders = &GenderRepository{db:dbConnection}
	BirthdayReminders = &BirthdayReminderRepository{db:dbConnection}
}