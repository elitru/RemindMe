package database

import (
	"RemindMe/errors"
	"RemindMe/logger"
	"io/ioutil"
)

const (
	QUERIES_ROOT = "assets/sql_scripts/"
	MIGRATION = "migration.sql"
)

//returns a query according to its filename
func getQuery(queryFile string) string {
	path := QUERIES_ROOT + queryFile

	logger.Debug("Reading query file (" + path + ")")

	queryRaw, err := ioutil.ReadFile(path)
	errors.CheckFatal(err)

	logger.Debug("Query was read successfully (" + path + ")")

	//parse to string
	return string(queryRaw)
}