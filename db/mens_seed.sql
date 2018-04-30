create table mens_jackets (
    id serial primary key,
    name text,
    price decimal,
    release_day text,
    release_month text,
    release_year text,
    image1 text,
    -- purpose
    rainware boolean default false,
    fleece boolean default false,
    insulateddown boolean default false,
    softshells boolean default false,
    vests boolean default false,
    casual boolean default false,
    skiingsnowboarding boolean default false,
    "3in1" boolean default false,
    running boolean default false,
    windware boolean default false,
    -- style
    hooded boolean default false,
    nonhooded boolean default false,
    vest boolean default false,
    longsleve boolean default false,
    triclimate boolean default false,
    hybrid boolean default false,
    parka boolean default false,
    "1piece" boolean default false,
    blanket boolean default false,
    bomber boolean default false,
    buttondown boolean default false,
    trench boolean default false,
    -- color
    black boolean default false,
    blue boolean default false,
    grey boolean default false,
    red boolean default false,
    green boolean default false,
    yellow boolean default false,
    beige boolean default false,
    white boolean default false,
    orange boolean default false,
    brown boolean default false,
    purple boolean default false,
    -- benefits
    waterproof boolean default false,
    insulated boolean default false,
    packable boolean default false,
    windprotection boolean default false,
    reflective boolean default false,
    breathable boolean default false,
    zipsnapcompat boolean default false,
    stretch boolean default false,
    recycled boolean default false,
    -- size
    onesize boolean default false,
    xs boolean default false,
    s boolean default false,
    m boolean default false,
    l boolean default false,
    xl boolean default false,
    xxl boolean default false,
    "3xl" boolean default false,
    -- activity
    hiking boolean default false,
    city boolean default false,
    climbing boolean default false,
    skiing boolean default false,
    run boolean default false,
    training boolean default false,
    snowboarding boolean default false,
    camping boolean default false
)

insert into mens_jackets (
    name
) values (
    'test'
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