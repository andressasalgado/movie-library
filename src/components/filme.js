import React, { useState } from 'react';

function FilmeInfos() {
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [director, setDirector] = useState('');
  const handleNameChange = (event) => setName(event.target.value);
  const handleYearChange = (event) => setYear(event.target.value);
  const handleDirectorChange = (event) => setDirector(event.target.value);

  return (
    <form className='filme'>
        <div>
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" value={name} onChange={handleNameChange} />
        </div>
        <div>
            <label htmlFor="year">Ano:</label>
            <input type="text" id="year" value={year} onChange={handleYearChange} />
        </div>
        <div>
            <label htmlFor="diretor">Diretor:</label>
            <input type="text" id="director" value={director} onChange={handleDirectorChange} />
        </div>
    </form>
  );
}

export default FilmeInfos;
