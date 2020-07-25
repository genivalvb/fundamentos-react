import React from 'react'


export default (props) => {
    return (
        <div>
            <button onClick={() => {
                props.noClique(Math.random())
            }}>Alterar</button>
        </div>
    )
}