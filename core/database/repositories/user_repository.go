package repositories

import (
	queryReader "RemindMe/database/query_reader"
	"RemindMe/errors"
	"RemindMe/logger"
	models "RemindMe/models/database"
	"database/sql"
	"github.com/google/uuid"
	"time"
)

//global access to user repository
var Users *UserRepository = nil

//name of the user repository directory containing all the sql scripts
var user_repository_directory = "user_repository/"

//the definition of the users repository
type UserRepository struct {
	//connection to the database
	db *sql.DB
}

/*
	==============================
	All repository implementations
	==============================
*/

//selects a user according to his user id
func (users *UserRepository) Get(userId string) (models.User, error) {
	query, err := queryReader.GetSQLQuery(user_repository_directory + "get_by_id.sql")

	//check for error while reading sql query
	if err != nil {
		return models.User{}, err
	}

	//make db select & parse to struct
	row := (*users).db.QueryRow(query, userId)
	user, err := users.mapToStruct(row)

	//handle errors
	if err != nil {
		if err == sql.ErrNoRows {
			//no user with the given id was found
			logger.Info("No user with that given UserId was found!")
			return models.User{}, nil
		}

		errors.Check(err)
		return models.User{}, err
	}

	return user, nil
}

//selects a user according to his username
func (users *UserRepository) GetByEmail(email string) (models.User, error) {
	query, err := queryReader.GetSQLQuery(user_repository_directory + "get_by_email.sql")

	//check for error while reading sql query
	if err != nil {
		return models.User{}, err
	}

	//make db select & parse to struct
	row := (*users).db.QueryRow(query, email)
	user, err := users.mapToStruct(row)

	//handle errors
	if err != nil {
		if err == sql.ErrNoRows {
			//no user with the given id was found
			logger.Info("No user with that given Email was found!")
			return models.User{}, nil
		}

		errors.Check(err)
		return models.User{}, err
	}

	return user, nil
}

//creates a new user entry and returns the according id afterwards
func (users *UserRepository) Create(email, firstname, lastname, hashedPassword string, birthdate time.Time, genderId int) (userId string, err error) {
	query, err := queryReader.GetSQLQuery(user_repository_directory + "create.sql")

	if err != nil {
		return "", err
	}

	err = (*users).db.QueryRow(query,
							   uuid.New().String(),
							   firstname,
							   lastname,
							   birthdate,
							   genderId,
							   email,
							   hashedPassword).Scan(&userId)

	if errors.Check(err) {
		return "", err
	}

	return userId, nil
}

//updates an user entry
func (users *UserRepository) Update(user *models.User) error {
	query, err := queryReader.GetSQLQuery(user_repository_directory + "update.sql")

	if err != nil {
		return err
	}

	_, err = (*users).db.Exec(query,
		user.FirstName,
		user.LastName,
		user.Email,
		user.BirthDate,
		user.Gender.GenderId,
		user.Password,
		user.Active,
		user.UserId)

	if errors.Check(err) {
		return err
	}

	return nil
}

//maps a given sql result row into a user struct
func (users *UserRepository) mapToStruct(row SqlResultRow) (models.User, error) {
	var user models.User = models.User{}

	//parse to struct
	err := row.Scan(
		&user.UserId,
		&user.FirstName,
		&user.LastName,
		&user.BirthDate,
		&user.Gender.GenderId,
		&user.Gender.Designation,
		&user.Email,
		&user.Password,
		&user.CreatedOn,
		&user.Active,
	)

	//check for errors
	if err != nil {
		return models.User{}, err
	}

	return user, nil
}