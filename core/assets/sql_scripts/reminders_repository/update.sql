UPDATE public."reminders"
SET image = $1,
    active = $2
WHERE reminder_id = $3;