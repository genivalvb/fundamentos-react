import React from 'react';
import Sub from './Sub';

export default (props) => {
    
    function quandoClicar(valor){
        console.log("Ação!!!")
        console.log(valor)
    }

    return (
        <div>
            <h4>Valor</h4>
            <Sub noClique={quandoClicar}></Sub>
        </div>
    );
};