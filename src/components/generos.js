import React, { useState } from 'react';

function GeneroDropDown() {
  const [genero, setGenre] = useState('');

  const handleGenreChange = (event) => setGenre(event.target.value);

  return (
    <form className='genero'>
      <div>
        <label htmlFor="genero">Gênero:</label>
        <select id="genero" value={genero} onChange={handleGenreChange}>
          <option value="">--Selecione--</option>
          <option value="ação">Ação</option>
          <option value="aventura">Aventura</option>
          <option value="comédia">Comédia</option>
          <option value="drama">Drama</option>
          <option value="romance">Romance</option>
          <option value="fantasia">Fantasia</option>
          <option value="ficcao">Ficção Científica</option>
          <option value="suspense">Suspense</option>
          <option value="terror">Terror</option>
          <option value="documentario">Documentário</option>
        </select>
      </div>
    </form>
  );
}

export default GeneroDropDown;
