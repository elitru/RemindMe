package main

import (
	"RemindMe/config"
	"RemindMe/database"
	birthdayReminders "RemindMe/handlers/birthday_reminders"
	"RemindMe/handlers/middleware"
	"RemindMe/handlers/users"
	"RemindMe/logger"
	"github.com/gorilla/mux"
	"net/http"
	"strconv"
)

//Entry point for web service
func main() {
	InitRouter()
}

//creates the gorilla mux router and sets it up
func InitRouter() {
	router := mux.NewRouter()
	InitRoutes(router)

	database.Setup(config.Config().DatabaseConfig.WithMigration)

	//start web service
	logger.Info("Server starting on port " + strconv.Itoa(config.Config().Port))
	http.ListenAndServe(":" + strconv.Itoa(config.Config().Port), router)
}

//defines the routes, their authentication level and their handlers
func InitRoutes(router *mux.Router) {
	router.HandleFunc("/users/login", users.Login).Methods("POST")
	router.HandleFunc("/users/create", users.Register).Methods("POST")
	router.HandleFunc("/users/deactivate", middleware.WithAuthentication(users.Deactivate).ServeHTTP).Methods("DELETE")
	router.HandleFunc("/users/change-password", middleware.WithAuthentication(users.ChangePassword).ServeHTTP).Methods("POST")

	router.HandleFunc("/reminders/birthdays/create", middleware.WithAuthentication(birthdayReminders.Create).ServeHTTP).Methods("POST")
	router.HandleFunc("/reminders/birthdays/update", middleware.WithAuthentication(birthdayReminders.Update).ServeHTTP).Methods("POST")
	router.HandleFunc("/reminders/birthdays/deactivate", middleware.WithAuthentication(birthdayReminders.Deactivate).ServeHTTP).Methods("DELETE")
}