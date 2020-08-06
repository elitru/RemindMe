package database

import (
	"RemindMe/config"
	queryReader "RemindMe/database/query_reader"
	"RemindMe/database/repositories"
	"RemindMe/errors"
	"RemindMe/logger"
	"database/sql"
	"fmt"
	_ "github.com/lib/pq"
)

var connection *sql.DB = nil

//opens up a connection to the postgres database
func connect() {
	if connection != nil {
		return
	}
	
	connectionString := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%d sslmode=disable",
		config.Config().DatabaseConfig.Host,
		config.Config().DatabaseConfig.User,
		config.Config().DatabaseConfig.Password,
		config.Config().DatabaseConfig.Database,
		config.Config().DatabaseConfig.Port)
	conn, err := sql.Open("postgres", connectionString)
	errors.CheckFatal(err)

	logger.Info("Successfully connected to database")

	connection = conn
}

//closes the connection to the database
func disconnect() {
	if connection != nil {
		logger.Info("Trying to disconnect from database")
		err := connection.Close()
		errors.CheckFatal(err)
		return
	}

	logger.Info("Could not disconnect from database as there if no open connection")
}

//opens a connection to the database and starts the migration if the tables do NOT exist yet
//afte all that, all the registered repositories will be initialized
func Setup(withMigration bool) {
	connect()

	if withMigration {
		//execute migration
		query, err := queryReader.GetSQLQuery(queryReader.MIGRATION)
		errors.CheckFatal(err)

		_, err = connection.Exec(query)
		errors.CheckFatal(err)
	}

	//init repositories
	repositories.Init(connection)
}