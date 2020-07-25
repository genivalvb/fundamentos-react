import React from 'react'

export default (props) => {
    //props é somente leitura
    //props.titulo = 'outro titulo'; não permitido
    return (
        <>
            <h3>{props.titulo}</h3>
            <h2>{props.subtitulo}</h2>
        </>
    )        
}