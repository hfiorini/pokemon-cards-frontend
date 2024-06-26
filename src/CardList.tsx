

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardComponent from './CardComponent'; // Adjust the path according to your project structure
import { Card } from './Card';
import CardDetail from './CardDetail';

const baseUrl = 'https://localhost:3000/cards'


const CardList: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);

  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);
    
  const handleCardClick = (id: number) => {
    setSelectedCardId(id);
  };

  const handleCardDetailClose = () => {

    setSelectedCardId(null);
    
    
    console.log(selectedCardId)
  };

  useEffect(() => {
    axios.get(baseUrl).then(response => setCards(response.data));
  }, []);




  return (
    <>
    <div id='imgContainer' style={{backgroundColor: '#292949'}}>
    <img  className='imgTitle' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Pok%C3%A9mon_Trading_Card_Game_logo.svg/1200px-Pok%C3%A9mon_Trading_Card_Game_logo.svg.png' />
    </div>
    
    <div className='gridContainer' style={{backgroundColor: '#292949'}}>
     {cards.map(card => (
          <div 
            key={card.id} 
            onClick={() => handleCardClick(card.id)}
         
          >
            <CardComponent card={card} />
            
            
          </div>
        ))}
       
        {selectedCardId !== null && (
        <div className="card-detail-popup">
          <CardDetail id={selectedCardId} onClose={handleCardDetailClose} />
        </div>
      )}
    </div>
    </>
  );
};

export default CardList;


