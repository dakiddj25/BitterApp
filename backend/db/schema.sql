-- DROP DATABASE IF EXISTS bitter_db;
-- CREATE DATABASE bitter_db;

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
post_id INT REFERENCES posts(id) ON DELETE SET NULL,
user_id INT REFERENCES users(id)
);

CREATE TABLE comments(
id SERIAL PRIMARY KEY,
post_id INT REFERENCES posts(id) ON DELETE SET NULL,
user_id INT REFERENCES users(id),
comment VARCHAR
);

CREATE TABLE hashtags(
id SERIAL PRIMARY KEY,
post_id INT REFERENCES posts(id) ON DELETE SET NULL,
hashtag VARCHAR
);

INSERT INTO users( firstName, lastName, userName, password,  email, user_pic)
VALUES( 'Johnanthan', 'james', 'whoinja', 'pursuit','whoinja9@pursuit.org', 'https://s.abcnews.com/images/Entertainment/WireAP_91d6741d1954459f9993bd7a2f62b6bb_16x9_992.jpg'),
    ( 'Jay', 'Jones', 'jones123', '1234','jones12@pursuit.org', 'https://cdn.newsapi.com.au/image/v1/8a4d4a44df4a7069781a6583461bcb1d'),
    ( 'Krystal', 'Corey', 'Cry123', '1234','cry12@pursuit.org', 'https://wikibio.in/wp-content/uploads/2020/04/Haley-Cureton.jpg'),
    ( 'Sammy', 'Jo', 'Jojo', '1234','jo12@pursuit.org', ' https://pmctvline2.files.wordpress.com/2020/04/too-hot-to-handle-francesca-2.jpg?w=620'),
    ( 'Jeremy', 'Bond', 'Jayjay', '1234','jdasasd12@pursuit.org', 'https://www.aceshowbiz.com/images/photo/drake.jpg'),
    ( 'Ben', 'Carson', 'benji', '1234','benny@pursuit.org', 'https://blogs.forbes.com/zackomalleygreenburg/files/2017/06/0606_celeb-the-weekend-4_1200x675-1200x675.jpg');

INSERT INTO posts(user_id, tweet)
VALUES (1, 'Kids don’t ever play outside no more than 10 min talking about it’s too hot . We use to be outside all day my mom didn’t play that! Get out her house (Face with tears of joy)'),
        (1, 'Is Insta cart really a thing?'),
        (1, 'just paid rent during a global pandemic Wow this is crazy'),
        (1, 'king of wealth redistribution Check out this link pic.twitter.com/oqMOWPUyVg'),
        (1, 'It feels like the richer that people get, the harder it is for them to remember that food costs money, actually.'),
         
         (2, 'just paid rent during a global pandemic crazy'),
        (2, 'How yall feel about the Nba?'),
        (2, 'WHYYYYYY ME LORDTT'),
        
         (3, 'Im really just trying to slide into some DMs'),
        (3, 'king of wealth Huh?'),
        (3, 'Money Anit a thing but a chicken wing'),
        
         (4, 'This Virus is really killing my VIBE'),
        (4, 'What shoule i watch on netflix'),
        (4, 'Big Money Dont Act Funny!!! '),
        
         (5, 'Whats the best way to approach someone after this?'),
        (5, 'read the room, Forbes Mag Thats me'),
        (5, 'I mean, if we’re going to be stuck inside for a lot longer, it might be a good investment?'),

        (6, 'Remind me to hire this wise cat to do my taxes next year.'),
        (6, 'Who has had the biggest comeback this year?'),
        (6, 'Money, Money Money!!!!!! Whoever likes this posts gives $1000!!');

INSERT INTO likes (post_id, user_id)
VALUES  (1,2),
        (1,3),
        (6,4),
        (6,3),
        (6,2),
        (6,5);

INSERT INTO comments (post_id, user_id, comment)
VALUES  (1,2, 'What are you talking about?'),
        (1,3, 'HUH?'),
        (2,6, 'You mad or nah?'),
        (3,6, 'Are you Dum, Stupid, or Dum'),
        (4,6 ,'All i do is win. Its crazy'),
        (5,6, 'Why are you even on twitter?');

INSERT INTO hashtags(post_id, hashtag)
VALUES( 1, '#summer'),
( 2, '#summer'),
( 3, '#summer'),
( 4, '#loveyourself'),
( 5, '#loveyourself'),
( 6, '#loveyourself'),
( 9, '#covid'),
( 10, '#covid'),
( 11, '#explore'),
( 16, '#explore'),
( 18, '#explore'),
( 20, '#explore');


        