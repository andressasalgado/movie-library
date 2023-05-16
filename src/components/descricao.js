import React, { useState } from 'react';

function DescricaoInput() {
  const [descricao, setDescricao] = useState('');

  const handleDescriptionChange = (event) => setDescricao(event.target.value);

  return (
    <form className='descricao'>
      <div>
        <label htmlFor="descricao">Descrição do filme:</label>
        <input type="text" id="descricao" value={descricao} onChange={handleDescriptionChange} />
      </div>
    </form>
  );
}

export default DescricaoInput;
