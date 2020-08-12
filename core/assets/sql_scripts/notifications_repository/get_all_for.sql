SELECT notification_id,
       reminder_id,
       remind_before,
       r.user_id
FROM public."reminder_notifications"
         INNER JOIN reminders r on reminder_notifications.reminder_id = r.reminder_id
WHERE r.user_id = $1
    AND r.reminder_id = $2;