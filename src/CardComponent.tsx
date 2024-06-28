import {Card} from './Card';
import './App.css';
import Grid from '@mui/material/Grid';


interface CardComponentProps {
    card: Card;
}

const CardComponent: React.FC<CardComponentProps> = ({card}) => {


    return (
        <>
            <div>
                <div>
                    <div className='pokeType'>


                        <Grid container>
                            <Grid item xs={6} md={4}>
                                <img id='card-image' className='pokeImage' src={`${card.imageUrl}.png`}
                                     alt={card.name}/>

                            </Grid>

                        </Grid>

                    </div>
                </div>
            </div>
        </>
    );
};

export default CardComponent;



