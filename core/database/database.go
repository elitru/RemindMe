package database

import (
	"RemindMe/config"
	"RemindMe/errors"
	"RemindMe/logger"
	"database/sql"
	"fmt"
)

var connection *sql.DB = nil

//opens up a connection to the postgres database
func connect() {
	if connection != nil {
		logger.Debug("Could not connect to database as there is already an open connection")
		return
	}

	logger.Debug("Bulding database connection string")

	connectionString := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%s sslmode=disable",
		config.Config().DatabaseConfig.Host,
		config.Config().DatabaseConfig.User,
		config.Config().DatabaseConfig.Password,
		config.Config().DatabaseConfig.Database,
		config.Config().DatabaseConfig.Port)

	logger.Debug("Trying to connect to database")

	conn, err := sql.Open("postgres", connectionString)
	errors.CheckFatal(err)

	logger.Info("Successfully connected to database")

	connection = conn
}

//closes the connection to the database
func disconnect() {
	if connection != nil {
		logger.Debug("Trying to disconnect from database")
		err := connection.Close()
		errors.CheckFatal(err)
		return
	}

	logger.Debug("Could not disconnect from database as there if no open connection")
}

//opens a connection to the database and starts the migration if the tables do NOT exist yet
func Setup() {
	connect()
}