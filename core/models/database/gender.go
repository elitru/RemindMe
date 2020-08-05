package database

import "RemindMe/models/dto"

type Gender struct {
	GenderId    int
	Designation string
}


func (gender *Gender) MapToDTO() dto.GenderDTO {
	return dto.GenderDTO{
		GenderId:    gender.GenderId,
		Designation: gender.Designation,
	}
}