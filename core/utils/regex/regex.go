package regex

const (
	EMAIL    = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
	NAME     = "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"
	//Minimum eight characters, at least one uppercase letter, one lowercase letter and one number
	PASSWORD = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$"
)
