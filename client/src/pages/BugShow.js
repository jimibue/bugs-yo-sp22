import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Treatment from '../components/Treatment'
import TreatmentForm from '../components/TreatmentForm'

const BugShow = ()=>{
    // state for data
    const [treatments, setTreatments] = useState([])
    // get data on mount
    useEffect(()=>{
        getTreatments()
    },[])
    const addTreatment = async (treatment)=>{
      // add to db
      let res = await axios.post(`/api/bugs/${params.id}/treatments`, treatment)
      // updating state (treatments)
      setTreatments([...treatments, res.data])
    } 
    const updateTreatment = async (treatment)=>{
      // update to db
      let res = await axios.put(`/api/bugs/${params.id}/treatments/${treatment.id}`, treatment)
      // UI
      const updateTreatments = treatments.map(t => t.id === res.data.id ? res.data : t )
      console.log('res.data:', res.data)
      console.log(updateTreatments)
      setTreatments(updateTreatments)
    }
    // hook up button and passing correct data
    // axios call
    // UI
    const deleteTreatment = async(id)=>{
       console.log('bug id',params.id)
       console.log('treatment id', id)
       // DB
       let res = await axios.delete(`/api/bugs/${params.id}/treatments/${id}`)
       // UI
       setTreatments(treatments.filter(t=> t.id !== id))
    }
    // axios get
    const getTreatments = async () => {
        // what is path, if unsure look at routes file
        // api call
        let res = await axios.get(`/api/bugs/${params.id}/treatments`)
        // store result of axios in state (useState)
        // UI
        setTreatments(res.data)
    }
    // TODO: render
    const renderTreatments =()=>{
      return treatments.map(t => <Treatment deleteTreatment={deleteTreatment} key={t.id} {...t} updateTreatment={updateTreatment}/>)
    }
    const params = useParams()
    const location = useLocation()
    return (
        <div>
            <h1>Bug: {location.state.name}</h1>
            <p>id {params.id}</p>
            <TreatmentForm addTreatment={addTreatment} />
            <hr />
            {renderTreatments()}
            <hr />
            <p>{JSON.stringify(treatments)}</p>
        </div>
    )
}

export default BugShow