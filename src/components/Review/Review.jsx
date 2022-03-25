import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { useHistory, Link} from 'react-router-dom';
//MUI
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

function Review() {

    const dispatch = useDispatch();
    const history = useHistory();
    const feeling = useSelector(store => store.feelingReducer)
    const understanding = useSelector(store => store.understandingReducer)
    const support = useSelector(store => store.supportReducer)
    const comment = useSelector(store => store.commentReducer)

    console.log('understanding', understanding);


    const feedback = {
        feeling: feeling.feeling,
        understanding: understanding.understanding,
        support: support.support,
        comment: comment.comment
    }

    console.log('this is the feedback', feedback);

    const submitFeedback =() => {
        axios.post('/api/feedback', feedback, {timeout: 1000})
                .then(response => {
                    //  move to the success route after successful submission
                    history.push('/success') 
                    dispatch({
                    type: 'EMPTY'
                    });
                })
                .catch (err => {
                    console.error('POST /api/feedback failed', err)
                })
                  
    }

    return (
        <Card sx={{ width: 700, height: 500, margin: 'auto' }}>

            <h1> Review Your Feedback </h1>

            <h3> Feelings: {feeling.feeling}</h3>
            <h3> Understanding: {understanding.understanding}</h3>
            <h3> Support: {support.support}</h3>
            <h3> Comments: {comment.comment}</h3>
            <div className='uBtn'>
                <Link to="/comments"><Button variant='contained'> Back </Button></Link>
                <Button variant='contained' onClick={submitFeedback}> SUBMIT </Button>
            </div>
        </Card>
    )
};

export default Review