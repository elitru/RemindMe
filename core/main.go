package main

import (
	"RemindMe/config"
	"RemindMe/database"
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

	database.Setup()

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
}