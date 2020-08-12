INSERT INTO public."reminder_notifications"
    (notification_id, reminder_id, remind_before)
VALUES
    ($1, $2, $3);