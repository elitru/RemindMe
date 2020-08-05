SELECT user_id,
       first_name,
       last_name,
       birth_date,
       g.gender_id,
       g.designation,
       email,
       password,
       created_on,
       active
FROM public."users"
         INNER JOIN genders g on users.gender_id = g.gender_id
WHERE email = $1
  AND active = TRUE;