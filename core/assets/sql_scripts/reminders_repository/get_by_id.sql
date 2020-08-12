SELECT reminder_id,
       user_id,
       image,
       active,
       created_on
FROM public."reminders"
WHERE reminder_id = $1;