-- Drop all tables (if they exist)
DROP TABLE IF EXISTS public."reminder_notifications";
DROP TABLE IF EXISTS public."reminders_birthdays";
DROP TABLE IF EXISTS public."reminders_anniversaries";
DROP TABLE IF EXISTS public."types";
DROP TABLE IF EXISTS public."reminders";
DROP TABLE IF EXISTS public."users";
DROP TABLE IF EXISTS public."genders";

-- Create tables

-- Create genders table
CREATE TABLE IF NOT EXISTS public."genders" (
  gender_id serial,
  designation character varying NOT NULL,
  PRIMARY KEY (gender_id)
);

-- Create users table
CREATE TABLE IF NOT EXISTS public."users" (
  user_id uuid,
  first_name character varying NOT NULL,
  last_name character varying NOT NULL,
  gender_id int NOT NULL,
  email character varying NOT NULL UNIQUE,
  password character varying,
  active bool NOT NULL DEFAULT TRUE,
  created_on timestamp NOT NULL DEFAULT NOW(),
  PRIMARY KEY (user_id),
  FOREIGN KEY (gender_id) REFERENCES public."genders"
);

-- Create table reminders
CREATE TABLE IF NOT EXISTS public."reminders" (
    reminder_id uuid,
    created_on timestamp NOT NULL DEFAULT NOW(),
    active bool NOT NULL DEFAULT TRUE,
    image character varying NOT NULL,
    user_id uuid NOT NULL,
    PRIMARY KEY (reminder_id),
    FOREIGN KEY (user_id) REFERENCES public."users"
);

-- Create birthdays table
CREATE TABLE IF NOT EXISTS public."reminders_birthdays" (
    reminder_id uuid,
    birth_date date NOT NULL,
    first_name character varying NOT NULL,
    last_name character varying NOT NULL,
    nickname character varying,
    PRIMARY KEY (reminder_id),
    FOREIGN KEY (reminder_id) REFERENCES public."reminders"
);

-- Create reminders_birthdays table
CREATE TABLE IF NOT EXISTS public."reminders_anniversaries" (
    reminder_id uuid,
    event_date date NOT NULL,
    event_since date DEFAULT NULL,
    title character varying NOT NULL,
    PRIMARY KEY (reminder_id),
    FOREIGN KEY (reminder_id) REFERENCES public."reminders"
);

-- Create reminder notifications
CREATE TABLE IF NOT EXISTS public."reminder_notifications" (
    notification_id uuid,
    reminder_id uuid NOT NULL,
    remind_before double precision NOT NULL,
    PRIMARY KEY (notification_id),
    FOREIGN KEY (reminder_id) REFERENCES public."reminders"
);