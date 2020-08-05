UPDATE public."users"
SET first_name = $1,
    last_name = $2,
    email = $3,
    birth_date = $4,
    gender_id = $5,
    password = $6,
    active = $7
WHERE user_id = $8;