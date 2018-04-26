create table mens_jackets (
    id serial primary key,
    name text,
    price decimal,
    release_day number,
    release_month number,
    release_year number,
    image1 text,
    
)

---------test----------
-- create table event (
-- id serial primary key,
-- dentist text,
-- date text,
-- time text,
-- avalable boolean
-- );

-- insert into event (
-- dentist,
-- date,
-- time,
-- avalable
-- ) values (
-- 'dentist_test',
-- '0-0-0',
-- '00:00:00',
-- false
-- )