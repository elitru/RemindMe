package query_reader

import (
	"io/ioutil"
)

const (
	QUERIES_ROOT = "assets/sql_scripts/"
	MIGRATION = "migration.sql"
)

//returns a query according to its filename
func GetSQLQuery(queryFile string) (string, error) {
	path := QUERIES_ROOT + queryFile
	queryRaw, err := ioutil.ReadFile(path)

	if err != nil {
		return "", err
	}

	//parse to string
	return string(queryRaw), nil
}