INSERT INTO public."reminders"
    (reminder_id, image, user_id)
VALUES
    ($1, $2, $3)
RETURNING reminder_id;