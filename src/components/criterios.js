import React from 'react';

function CriteriosCheckbox() {

  return (
    <form className='criterios'>
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
    </form>
  );
}

export default CriteriosCheckbox;
