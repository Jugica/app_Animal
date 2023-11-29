import React from "react";

function AnimalItem({ animal, alterarStatus, removerAnimal }) {
  return (
    <div className="Animal">
      <img src={animal.foto} alt={animal.raca} />
      <h3 style={{ textDecoration: animal.isConcluido ? 'line-through' : '' }}>{animal.raca}</h3>
      <p>{`Local: ${animal.local}, Tipo: ${animal.tipo}`}</p>
      <div>
        <button className="bt_concluir" onClick={() => alterarStatus(animal.id)}>Alterar Status</button>
        <button className="bt_remover" onClick={() => removerAnimal(animal.id)}>Remover</button>
      </div>
    </div>
  );
}

export default AnimalItem;
