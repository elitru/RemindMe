INSERT INTO public."reminders_birthdays"
    (reminder_id, birth_date, first_name, last_name, nickname)
VALUES
    ($1, $2, $3, $4, $5)
RETURNING reminder_id;