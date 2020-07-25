import React from 'react'
import products from '../components/data/products'

export default (props) => {

    function getProductsListItem(){
        return products.map(prod => {
            return <li key={prod.id}>{prod.id} - {prod.name} - R$ {prod.price} </li>
        })
    }

    return (
        <div>
            <h2>Repetition</h2>
            <ul>
                {getProductsListItem()}
            </ul>
        </div>
    )
}