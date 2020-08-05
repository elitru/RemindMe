package repositories

import (
	queryReader "RemindMe/database/query_reader"
	"RemindMe/errors"
	"RemindMe/logger"
	models "RemindMe/models/database"
	"database/sql"
)

//global access to gender repository
var Genders *genderRepository = nil

//name of the gender repository directory containing all the sql scripts
var gender_repository_directory = "gender_repository/"

//the definition of the genders repository
type genderRepository struct {
	//connection to the database
	db *sql.DB
}

/*
	==============================
	All repository implementations
	==============================
*/

//selects all existing genders from the database
func (genders *genderRepository) GetAll() ([]models.Gender, error) {
	query, err := queryReader.GetSQLQuery(gender_repository_directory + "get_all.sql")

	//check for error while reading sql query
	if err != nil {
		return []models.Gender{}, err
	}

	//make db select & parse to struct
	var retrievedGenders []models.Gender
	rows, err := (*genders).db.Query(query)

	//handle errors
	if err != nil {
		if err == sql.ErrNoRows {
			//no genders found
			logger.Info("No genders found!")
			return retrievedGenders, nil
		}

		errors.Check(err)
		return retrievedGenders, err
	}

	//parse to structs
	for rows.Next() {
		var gender models.Gender

		err = rows.Scan(&gender.GenderId, &gender.Designation)

		if errors.Check(err) {
			return []models.Gender{}, err
		}

		retrievedGenders = append(retrievedGenders, gender)
	}

	return retrievedGenders, nil
}

//retrieves a gender entry according to its id
func (genders *genderRepository) Get(genderId int) (models.Gender, error){
	query, err := queryReader.GetSQLQuery(gender_repository_directory + "get_by_id.sql")

	//check for error while reading sql query
	if err != nil {
		return models.Gender{}, err
	}

	//make db select & parse to struct
	var gender models.Gender = models.Gender{}
	row := (*genders).db.QueryRow(query, genderId)

	err = row.Scan(
		&gender.GenderId,
		&gender.Designation,
	)

	//handle errors
	if err != nil {
		if err == sql.ErrNoRows {
			//no user with the given id was found
			logger.Info("No gender with that given GenderId was found!")
			return models.Gender{}, nil
		}

		errors.Check(err)
		return models.Gender{}, err
	}

	return gender, nil
}