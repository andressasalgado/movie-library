import React, { useState } from 'react';
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating';


function MovieForm() {
  const [name, setName] = useState('');
  const [genero, setGenre] = useState('');
  const [descricao, setDescricao] = useState('');
  const [rating, setRating] = useState('');

  const handleNameChange = (event) => setName(event.target.value);
  const handleGenreChange = (event) => setGenre(event.target.value);
  const handleDescriptionChange = (event) => setDescricao(event.target.value);

  return (
    <form className='formulario'>
      <h1>Avaliando filmes</h1>
      <div>
        <label htmlFor="name">Nome:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
      </div>
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
      <div>
        <label htmlFor="descricao">Descrição do filme:</label>
        <input type="text" id="descricao" value={descricao} onChange={handleDescriptionChange} />
      </div>
      <div>
        <label>Critérios de análise:</label>
        <div>
          <input type="checkbox" id="bom-enredo" name="bom-enredo" />
          <label htmlFor="bom-enredo">Bom enredo</label>
        </div>
        <div>
          <input type="checkbox" id="boa-atuacao" name="boa-atuacao" />
          <label htmlFor="boa-atuacao">Boa atuação</label>
        </div>
        <div>
          <input type="checkbox" id="boa-direcao" name="boa-direcao" />
          <label htmlFor="boa-direcao">Boa direção</label>
        </div>
        <div>
          <input type="checkbox" id="bom-roteiro" name="bom-roteiro" />
          <label htmlFor="bom-roteiro">Bom roteiro</label>
        </div>
        <div>
          <input type="checkbox" id="boa-fotografia" name="boa-fotografia" />
          <label htmlFor="boa-fotografia">Boa fotografia</label>
        </div>
      </div>
      {/* Referência: https://mui.com/material-ui/react-rating/ */}
      <Typography component="legend">Avaliação:</Typography>
      <Rating
        name="simple-controlled"
        rating={rating}
        onChange={(event, newValue) => {
            setRating(rating);
        }}
        />

        <div>
            <button type="button" className='button'>Salvar</button>
        </div>
    </form>
  );
}

export default MovieForm;
