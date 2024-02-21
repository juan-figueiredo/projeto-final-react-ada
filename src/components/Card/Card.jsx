import React from 'react';
import Button from '../Button/Button';
import Desc from '../Desc/Desc';
import Title from '../Title/Title'
import Image from '../Image/Image'
import './Card.css';

const Card = ({ title, image, desc, button}) => { 
  return (

    <div className='card-container'>

      <div className="image">
        <Image image={image} />
      </div>

      <div className="title">
        <Title title = {title}/>
      </div>

      <div className="desc">
        <Desc desc = {desc}/>
      </div>

      <div className="btn">

        <Button button = {button} />

        <Button>
          <a href="#">Remover</a>
        </Button>
        
      </div>
    </div>
  );
}


export default Card;
