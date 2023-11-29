import React, { useState } from "react";

function CadastroForm({ adicionarAnimal }) {
  const [animal, setAnimal] = useState({
    foto: "",
    raca: "",
    local: "",
    tipo: ""
  });

  const cadastrarAnimal = () => {
    if (animal.foto === '' || animal.raca === '' || animal.local === '' || animal.tipo === '') return;

    adicionarAnimal(animal);
    setAnimal({
      foto: "",
      raca: "",
      local: "",
      tipo: ""
    });
  }

  return (
    <>
      <h1>Cadastrar Animal</h1>
      <div>
        <input type="text" value={animal.foto} onChange={(e) => setAnimal({ ...animal, foto: e.target.value })} placeholder="URL da Foto" />
        <input type="text" value={animal.raca} onChange={(e) => setAnimal({ ...animal, raca: e.target.value })} placeholder="Raça" />
        <input type="text" value={animal.local} onChange={(e) => setAnimal({ ...animal, local: e.target.value })} placeholder="Local (Perdido/Resgatado)" />
        <input type="text" value={animal.tipo} onChange={(e) => setAnimal({ ...animal, tipo: e.target.value })} placeholder="Tipo (Perdido/Resgatado)" />
        <button className="bt_concluir" onClick={cadastrarAnimal}>Cadastrar</button>
      </div>
    </>
  );
}

export default CadastroForm;

