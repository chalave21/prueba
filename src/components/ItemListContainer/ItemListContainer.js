import React from 'react'
import Card from '../card/Card';

function ItemListContainer(props) {
  return (
    <div className='container-fluid'>
    <h1>{props.greeting}</h1>
    <Card />
    </div>
  
  )
}

export default ItemListContainer