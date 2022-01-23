import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { useHistory, Link} from 'react-router-dom';


function Review() {

    const dispatch = useDispatch();
    const history = useHistory();
    const feeling = useSelector(store => store.feelingReducer[0])
    const understanding = useSelector(store => store.understandingReducer[0])
    const support = useSelector(store => store.supportReducer[0])
    const comment = useSelector(store => store.commentReducer[0])

    console.log('understanding', understanding);

    const feedback = {
        feeling: feeling.feeling,
        understanding: understanding.understanding,
        support: support.support,
        comment: comment.comment
    }

    const submitFeedback =() => {
        axios.post('/api/feedback', feedback)
                .then(res => {
                    dispatch({
                        type: 'EMPTY_FEELING'
                    });
                    dispatch({
                        type: 'EMPTY_UNDERSTANDING'
                    });
                    dispatch({
                        type: 'EMPTY_SUPPORT'
                    });
                    dispatch({
                        type: 'EMPTY_COMMENT'
                    })
                    history.push('/Success')  
                })
                .catch (err => {
                    console.error('POST /api/feedback failed', err)
                })
                  
    }

    return (
        <>
            <h1> Review Your Feedback </h1>

            <h3> Feelings: {feeling.feeling}</h3>
            <h3> Understanding: {understanding.understanding}</h3>
            <h3> Support: {support.support}</h3>
            <h3> Comments: "{comment.comment}"</h3>

            <Link to="/Success"> <button onClick={submitFeedback}> SUBMIT </button></Link>
        </>
    )
};

export default Review