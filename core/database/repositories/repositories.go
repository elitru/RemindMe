package repositories

import "database/sql"

//creates all registered repositories for the web service
func Init(dbConnection *sql.DB) {
	Users = &userRepository{db: dbConnection}
	Genders = &genderRepository{db:dbConnection}
}