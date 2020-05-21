DROP DATABASE IF EXISTS bitter_db;
CREATE DATABASE bitter_db;

-- \c bitter_db;

-- //users, posts, like, comment

DROP TABLE IF EXISTS hashtags;
DROP TABLE IF EXISTS likes;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS users; 

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    firstName text NOT NULL,
    lastName text NOT NULL, 
    userName TEXT NOT NULL UNIQUE,
    password VARCHAR, 
    email VARCHAR,
    user_pic VARCHAR
);

CREATE TABLE posts(
id SERIAL PRIMARY KEY,
user_id INT REFERENCES users(id),
tweet VARCHAR(280)
);

CREATE TABLE likes(
id SERIAL PRIMARY KEY,
post_id INT REFERENCES posts(id),
user_id INT REFERENCES users(id)
);

CREATE TABLE comments(
id SERIAL PRIMARY KEY,
post_id INT REFERENCES posts(id),
user_id INT REFERENCES users(id),
comment VARCHAR
);

CREATE TABLE hashtags(
id SERIAL PRIMARY KEY,
post_id INT REFERENCES posts(id),
hashtag VARCHAR
);

INSERT INTO users( firstName, lastName, userName, password,  email, user_pic)
VALUES( 'Johnanthan', 'james', 'whoinja', 'pursuit','whoinja9@pursuit.org', 'https://vignette.wikia.nocookie.net/jimmyneutron/images/5/57/Jimmy_Neutron.png/revision/latest?cb=20180219044703'),
    ( 'Jay', 'Jones', 'jones123', '1234','jones12@pursuit.org', 'https://cdn.newsapi.com.au/image/v1/8a4d4a44df4a7069781a6583461bcb1d'),
    ( 'Krystal', 'Corey', 'Cry123', '1234','cry12@pursuit.org', 'https://wikibio.in/wp-content/uploads/2020/04/Haley-Cureton.jpg'),
    ( 'Sammy', 'Jo', 'Jojo', '1234','jo12@pursuit.org', ' https://pmctvline2.files.wordpress.com/2020/04/too-hot-to-handle-francesca-2.jpg?w=620'),
    ( 'Jeremy', 'Bond', 'Jayjay', '1234','jdasasd12@pursuit.org', 'https://files.slack.com/files-pri/TCVA3PF24-F010341R4A3/20190204_195323.jpg'),
    ( 'Ben', 'Carson', 'benji', '1234','benny@pursuit.org', 'https://steamuserimages-a.akamaihd.net/ugc/494654052800262970/8F0E2FA5EB82B5D30E1C568B7524A9FECAC020A6/');

INSERT INTO posts(user_id, tweet)
VALUES (1, 'Kids don’t ever play outside no more than 10 min talking about it’s too hot . We use to be outside all day my mom didn’t play that! Get out her house (Face with tears of joy)'),
        (1, 'I be saying “don’t worry I’m Gucci” when in fact I am T.J Maxx'),
        (1, 'just paid rent during a global pandemic I’m 100% a B%6$h'),
        (1, 'king of wealth redistribution pic.twitter.com/oqMOWPUyVg'),
        (1, 'It feels like the richer that people get, the harder it is for them to remember that food costs money, actually.'),
         
         (2, 'just paid rent during a global pandemic crazy'),
        (2, 'How yall feel about the Nba?'),
        (2, 'WHYYYYYY ME LORDTT'),
        
         (3, 'Im really just trying to slide into some DMs'),
        (3, 'king of wealth redistribution pic.twitter.com/oqMOWPUyVg'),
        (3, 'Money Anit a thing but a chicken wing'),
        
         (4, 'THis Virus is really killing my VIBE'),
        (4, 'Money anit a thing but a chicken wing!'),
        (4, 'Big Money Dont Act Funny!!! You The Vibe WHen we come outside'),
        
         (5, 'Whats the best way to approach someone after this?'),
        (5, 'read the room, Forbes https://twitter.com/Forbes/status/1247520987802787840 …'),
        (5, 'I mean, if we’re going to be stuck inside for a lot longer, it might be a good investment?'),

        (6, 'Remind me to hire this wise cat to do my taxes next year.'),
        (6, 'How i ratted and still came home to a big bag!!'),
        (6, 'Trigger fingers turn to twitter fingers! Whoever likes this posts gives $1000!!');

INSERT INTO likes (post_id, user_id)
VALUES(1,2),
        (1,3),
        (6,4),
        (6,3),
        (6,2),
        (6,5);

INSERT INTO comments (post_id, user_id, comment)
VALUES(1,2, 'What are you talking about?'),
        (1,3, 'HUH?'),
        (2,6, 'You mad or nah?'),
        (3,6, 'Are you Dum, Stupid, or Dum'),
        (4,6 ,'All i do is win. Its crazy'),
        (5,6, 'Why are you even on twitter?');

INSERT INTO hashtags(post_id, hashtag)
VALUES( 1, '#summer19'),
( 2, '#nocorona'),
( 3, '#summertimefine'),
( 4, '#loveyourself'),
( 5, '#livelove');

        