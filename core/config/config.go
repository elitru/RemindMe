package config

import (
	"RemindMe/errors"
	"encoding/json"
	"io/ioutil"
)

const CONFIG_PATH = "assets/config.json"

var config Configuration = Configuration{}

type Configuration struct {
	Port           int                   `json:"port"`
	DatabaseConfig DatabaseConfiguration `json:"database_config"`
	JWTConfig      JWTConfig             `json:"jwt_config"`
}

type DatabaseConfiguration struct {
	Host     string `json:"host"`
	Port     int    `json:"port"`
	User     string `json:"user"`
	Password string `json:"password"`
	Database string `json:"database"`
}

type JWTConfig struct {
	Secret string `json:"secret"`
}

//returns the configuration loaded from the config file (/assets/config.json)
func Config() Configuration {
	if config != (Configuration{}) {
		return config
	}

	//read config content as byte[]
	configRaw, err := ioutil.ReadFile(CONFIG_PATH)
	errors.CheckFatal(err)

	//parse to config
	err = json.Unmarshal(configRaw, &config)
	errors.CheckFatal(err)

	return config
}
