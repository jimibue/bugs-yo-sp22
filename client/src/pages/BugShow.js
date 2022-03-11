import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

const BugShow = ()=>{
    // get on mount
    
    // state for data
    const [treatments, setTreatments] = useState()
    // useEffect
    useEffect(()=>{
        getTreatments()
    },[])
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

    }
    const params = useParams()
    const location = useLocation()
    return (
        <div>
            <h1>Bug: {location.state.name}</h1>
            <p>id {params.id}</p>
            <p>{JSON.stringify(treatments)}</p>
        </div>
    )
}

export default BugShow