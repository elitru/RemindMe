UPDATE public."reminders_birthdays"
SET first_name = $1,
    last_name = $2,
    nickname = $3,
    birth_date = $4
WHERE reminder_id = $5;