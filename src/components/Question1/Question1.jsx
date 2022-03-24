import React,  { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
// mui
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';



function Question1() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [feeling, setFeeling] = useState(1);

    const saveFeeling = (event) => {
        event.preventDefault();
        console.log('in saveFeeling function');
        // send data to store
        dispatch({
            type: 'SUBMIT_FEELING',
            payload: {feeling: Number(feeling)}
        })
        // clear inputs
        setFeeling('')
       history.push('/understanding')
    }

    return (
       
       <Card sx={{ minWidth: 275, maxWidth: 700, minHeight: 500, margin: 'auto' }}>
         <CardContent sx={{ position: 'relative', alignItems: 'center'}}>
        <h1> How are you feeling today?</h1>

        <Box sx={{ maxWidth: 80 }}>

        <FormControl fullWidth sx={{ position: 'relative', alignItems: 'center'}}>
            <InputLabel id="demo-simple-select-label">Feeling</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={feeling}
                    label="Feeling"
                    onChange={evt => setFeeling(evt.target.value)}
                >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                </Select>
         </FormControl>
         </Box>
        </CardContent>
        <Button variant="contained" onClick={saveFeeling} sx={{ marginTop: 3, position: 'absolute', right: 250, bottom: 200 }}> Next</Button>
        </Card>
        
     
    )
};

export default Question1;