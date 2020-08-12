SELECT r.reminder_id,
       r.image,
       r.active,
       r.created_on,
       r.user_id,
       rm.birth_date,
       rm.first_name,
       rm.last_name,
       rm.nickname
FROM public."reminders" r
INNER JOIN public."reminders_birthdays" rm ON r.reminder_id = rm.reminder_id
WHERE r.reminder_id = $1;