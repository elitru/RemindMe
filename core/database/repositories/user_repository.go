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
var Users *userRepository = nil

//name of the user repository directory containing all the sql scripts
var user_repository_directory = "user_repository/"

//the definition of the users repository
type userRepository struct {
	//connection to the database
	db *sql.DB
}

/*
	==============================
	All repository implementations
	==============================
*/

//selects a user according to his user id
func (users *userRepository) Get(userId string) (models.User, error) {
	query, err := queryReader.GetSQLQuery(user_repository_directory + "get_by_id.sql")

	//check for error while reading sql query
	if err != nil {
		return models.User{}, err
	}

	//make db select & parse to struct
	var user models.User = models.User{}
	row := (*users).db.QueryRow(query, userId)

	err = row.Scan(
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
func (users *userRepository) GetByEmail(email string) (models.User, error) {
	query, err := queryReader.GetSQLQuery(user_repository_directory + "get_by_email.sql")

	//check for error while reading sql query
	if err != nil {
		return models.User{}, err
	}

	//make db select & parse to struct
	var user models.User = models.User{}
	row := (*users).db.QueryRow(query, email)

	err = row.Scan(
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
func (users *userRepository) Create(email, firstname, lastname, hashedPassword string, birthdate time.Time, genderId int) (userId string, err error) {
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
func (users *userRepository) Update(user *models.User) error {
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