INSERT INTO public.users(
    user_id, first_name, last_name, birth_date, gender_id, email, password)
VALUES ($1, $2, $3, $4, $5, $6, $7)
RETURNING user_id;