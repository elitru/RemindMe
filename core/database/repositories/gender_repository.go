package repositories

import (
	queryReader "RemindMe/database/query_reader"
	"RemindMe/errors"
	"RemindMe/logger"
	models "RemindMe/models/database"
	"database/sql"
)

//global access to gender repository
var Genders *GenderRepository = nil

//name of the gender repository directory containing all the sql scripts
var gender_repository_directory = "gender_repository/"

//the definition of the genders repository
type GenderRepository struct {
	//connection to the database
	db *sql.DB
}

/*
	==============================
	All repository implementations
	==============================
*/

//selects all existing genders from the database
func (genders *GenderRepository) GetAll() ([]models.Gender, error) {
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
		gender, err := genders.mapToStruct(rows)

		if errors.Check(err) {
			return []models.Gender{}, err
		}

		retrievedGenders = append(retrievedGenders, gender)
	}

	return retrievedGenders, nil
}

//retrieves a gender entry according to its id
func (genders *GenderRepository) Get(genderId int) (models.Gender, error){
	query, err := queryReader.GetSQLQuery(gender_repository_directory + "get_by_id.sql")

	//check for error while reading sql query
	if err != nil {
		return models.Gender{}, err
	}

	//make db select & parse to struct
	row := (*genders).db.QueryRow(query, genderId)
	gender, err := genders.mapToStruct(row)

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

//maps a given sql result row into a gender struct
func (genders *GenderRepository) mapToStruct(row SqlResultRow) (models.Gender, error) {
	var gender models.Gender = models.Gender{}

	//parse to struct
	err := row.Scan(
		&gender.GenderId,
		&gender.Designation,
	)

	if err != nil {
		return models.Gender{}, err
	}

	return gender, nil
}