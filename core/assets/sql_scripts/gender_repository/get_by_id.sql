SELECT gender_id, designation
FROM public."genders"
WHERE gender_id = $1;