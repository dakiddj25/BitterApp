const express = require('express');
require('dotenv').config()
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express(); 
const PORT = process.env.PORT;

const usersRouter = require('./routes/usersRouter');
const postRouter = require('./routes/postsRouter');
// const likeRouter = require('./routes/likeRouter');
// const commentRouter = require('./routes/commentRouter');
const hashtagRouter = require('./routes/hashtagRouter');


app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));app.use(bodyParser.json());

app.use('/users', usersRouter);
app.use('/posts', postRouter);
// app.use('/likes', likeRouter);
// app.use('/comments', commentRouter);
app.use('/hashtag', hashtagRouter);


app.use((err, req, res, next) => {
    console.log(err)
    if(err.status){
        res.status(err.status).json(err);
    } else {
        res.status(500).json({ err })
    }
})

app.listen(PORT, () => console.log("Listening", PORT));