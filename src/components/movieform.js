import React, { useState } from 'react';
import GeneroDropDown from './generos';
import DescricaoInput from './descricao';
import CriteriosCheckbox from './criterios';
import AvaliacaoEstrelas from './avaliacao';
import FilmeInfos from './filme';

function MovieForm() {
  const [reviews, setReviews] = useState([]);

  return (
    <form className='formulario'>
        <FilmeInfos/>
        <GeneroDropDown/>
        <DescricaoInput/>
        <CriteriosCheckbox/>
        <AvaliacaoEstrelas/>
        <div>
            <button type="button" className='button'>Salvar</button>
        </div>
    </form>
  );
}

export default MovieForm;
