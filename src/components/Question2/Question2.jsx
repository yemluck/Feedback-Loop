import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, Link } from 'react-router-dom';
import './Question2.css';
// Mui
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';

function Question2 () {
    const history = useHistory();
    const dispatch = useDispatch();
    const [understanding, setUnderstanding] = useState(1);

    const saveUnderstanding = (event) => {
        event.preventDefault();
        console.log('in saveUnderstanding function');
        // send data to reducer
        dispatch({
            type: 'SUBMIT_UNDERSTANDING',
            payload: { understanding: Number(understanding) }
        })
        // clear inputs
        setUnderstanding('')
        // push to next route
        // Link doesn't work
        history.push('/support')
    }

    return(

        <Card sx={{ width: 700, height: 500, margin: 'auto', backgroundColor: "" }}>
            <CardContent sx={{ alignItems: 'center', height: "400px" }}>
                <h1> How well are you understanding the content? </h1>
                <FormControl sx={{ m: 10, minWidth: 120 }}>
                    <InputLabel id="understanding">Understanding</InputLabel>
                    <Select
                        labelId="understanding"
                        value={understanding}
                        label="understanding"
                        onChange={evt => setUnderstanding(evt.target.value)}
                    >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                    </Select>
                </FormControl>
            </CardContent>
            <div className='uBtn'>
                <Link to="/feeling"><Button variant="contained"> Back </Button></Link>
                <Button variant="contained" onClick={saveUnderstanding}> Next </Button>
            </div>
        </Card>
    )
};

export default Question2