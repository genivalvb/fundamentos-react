import React from 'react'
import Son from './Son'

export default (props) => {
    return (
        <div>
            <h3>Componente Pai</h3>
            <Son {...props}>Yahonan</Son>
            <Son lastname={props.lastname}>Miriam</Son>
            <Son {...props}>Michael</Son>
        </div>
    )
}