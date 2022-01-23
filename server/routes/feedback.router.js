const express = require('express');
const feedbackRouter = express.Router();
const pool = require('../modules/pool');

// GET endpoint


// POST endpoint
feedbackRouter.post('/', (req,res) => {
    console.log('feedback to send to db', req.body);
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                    VALUES ($1, $2, $3, $4);`
    let queryParams = [
        req.body.feeling,
        req.body.understanding,
        req.body.support,
        req.body.comment
    ];
    pool.query(queryText, queryParams)
    .then(result => {
        res.sendStatus(201);
    })
    .catch(error => {
        console.log('error adding new feedback', error);
        res.sendStatus(500);
        
    })

    
})



module.exports = feedbackRouter;