import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from './Card';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import { Button, IconButton, MenuItem, Select, TextField, styled } from '@mui/material';




const baseUrl = 'https://localhost:3000/cards/'

interface CardDetailProps {
    id: number;
    onClose: () => void;
}

const CardDetail: React.FC<CardDetailProps> = ({ id, onClose }) => {

    const [card, setCard] = useState<Card | null>(null);
    const [opponents, setOpponents] = useState<Card[]>([]);
    const [opponentId, setOpponentId] = useState("");
    const [result, setResult] = useState<string | null>(null);

    useEffect(() => {
        axios.get(`${baseUrl}${id}`).then(response => setCard(response.data));
    }, []);

    useEffect(() => {
        axios.get(baseUrl).then(response => setOpponents(response.data));
    }, []);

    const handleBattle = () => {
        axios.post(`${baseUrl}battle`, { id, opponentId }).then(response => {
            setResult(response.data);
        });
    };


    const CustomFormControl = styled(FormControl)(({ theme }) => ({
        minWidth: '90%',
        margin: theme.spacing(1),
        textDecorationColor: 'white',
        '& .MuiInputBase-root': {
            backgroundColor: 'white', // Background color for the select box
            borderRadius: 4, // Rounded corners
            padding: '10px 14px', // Padding inside the select box
        },
        '& .MuiInputLabel-root': {
            fontSize: '1rem', // Label font size

        },
        '& .MuiSelect-select': {
            padding: '10px 14px', // Padding inside the select box
        },
    }));

    return card ? (

        <div className='detail' >

            <Grid container spacing={2} >

                <Grid item xs={12} sm={6}  >
                    <h2 className="poke-name">{card.name}</h2>
                </Grid>
                <Grid item xs={12} sm={6}  >
                    <p className="hp">
                        <span>HP</span>
                        {card.hp}
                    </p>
                </Grid>
            </Grid>


            <Grid container spacing={2} className='container-detail'>
                <Grid item xs={12} sm={6}  >
                    <img src={`${card.imageUrl}_hires.png`} className='imgDetail' onClick={() => onClose()} />
                </Grid>

                <Grid item xs={12} sm={6}  >
                    <div className='empty' style={{ height: '35%' }}></div>

                    <div className="vs">VS</div>
                    <div style={{ marginLeft: '15%' }}>
                        <CustomFormControl >

                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={opponentId}
                                label="Select your opponent"
                                onChange={(event) => {setOpponentId(event.target.value); setResult(null)}}
                            >
                                {opponents.map(opponent => opponent.id !== card.id && (
                                    <MenuItem value={opponent.id}>{opponent.name}</MenuItem>

                                ))}
                            </Select>
                        </CustomFormControl>
                        
                    </div>
                    <div className='button-battle'>
                    {opponentId !== "" && (
                            <Button variant="contained" color="success" onClick={handleBattle}>
                            Battle 
                        </Button>
                        )}
                        
                        
                        
                    </div>

                    <div className='battle-result'>
                    {result && <p>{result}</p>}
                    </div>
                </Grid>

            </Grid>


            <Grid container spacing={2} className='stats'>
                <Grid item xs={12} sm={6} md={4} className='stats-div'><h3>{card.attack}</h3><p>Attack</p></Grid>
                <Grid item xs={12} sm={6} md={4} className='stats-div'> <h3>{card.weaknesses}</h3><p>Weaknesses</p></Grid>
                <Grid item xs={12} sm={6} md={4} className='stats-div'><h3>{card.defense}</h3> <p>Defense</p></Grid>
            </Grid>

        </div>
    ) : (
        <p>Loading...</p>
    );
};


export default CardDetail;

