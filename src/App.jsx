import { useState } from 'react'
import './App.css'
import CadastroForm from './CadastrarForm'
import AnimalItem from './AnimalItem'
import ListaAnimais from './ListaAnimais'

function App() {
  const [listaAnimais, setListaAnimais] = useState([
   { id: 1, 
    foto: "https://s2-vidadebicho.glbimg.com/KZTd_8gIkkiAwT2cJ0QARS3bMlY=/0x0:1200x775/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_fb623579cd474803aedbbbbae014af68/internal_photos/bs/2022/K/z/dguBMXRMOsX8WmbGQNAQ/2022-09-16-caes-miniatura-tendencia-pode-nao-ser-saudavel-para-os-animais.jpeg", 
    raca: "Cachorro", local: "Perdido", tipo: "Perdido", isConcluido: false },
    
  ])

  const adicionarAnimal = (animal) => {
    const novoAnimal = {
      id: Math.floor(Math.random() * 100000),
      ...animal,
      isConcluido: false
    };

    setListaAnimais([...listaAnimais, novoAnimal]);
  }
  const alterarStatus = (id) => {
    const novaListaAnimais = listaAnimais.map((animal) => {
      if (animal.id === id) {
        return { ...animal, isConcluido: !animal.isConcluido };
      }
      return animal;
    });

    setListaAnimais(novaListaAnimais);
  }
  const removerAnimal = (id) => {
    const novaListaAnimais = listaAnimais.filter((animal) => animal.id !== id);
    setListaAnimais(novaListaAnimais);
  }

  const [search, setSearch] = useState('');
  

  return (
    <div className='App'>
      <h1>Lista de Animais</h1>
      <CadastroForm adicionarAnimal={adicionarAnimal} />

      <ListaAnimais
        animais={listaAnimais}
        search={search}
        alterarStatus={alterarStatus}
        removerAnimal={removerAnimal}
      /> 
    </div>
  );
}

export default App;
