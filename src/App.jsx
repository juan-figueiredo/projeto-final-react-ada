import React from 'react'
import './App.css';
import Card from './components/Card/Card'


function App() {


  return (
    <div className="App">


    <Card 
      image="https://disneyplusbrasil.com.br/wp-content/uploads/2021/08/Homem-Aranha-direitos-da-Sony-1024x576.jpg"
      title="Homem-Aranha" 
      desc={`Peter Parker, o Homem-Aranha, é um super-herói da Marvel com habilidades aracnídeas, combatendo criminosos em Nova York com agilidade e força.`} 
    />  
    </div>
  );
};

export default App
