import React from 'react'
import TreatmentForm from './TreatmentForm'

const Treatment = (props)=>{
    return (
        <div className='border'>
            <h1>Name: {props.name}</h1>
            <p>id: {props.id}</p>
            <button onClick={()=> props.deleteTreatment(props.id)}>delete</button>
            <TreatmentForm updateTreatment={props.updateTreatment} id={props.id} name={props.name}/>
        </div>
    )
}

export default Treatment