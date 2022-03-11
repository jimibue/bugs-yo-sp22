import React, { useState } from "react";

// Form
// input state/UI
// handle submit
// decide to update/create
// decide where to do axios
// some how update state in
const TreatmentForm = (props) => {
  const [name, setName] = useState(props.name || '');
  const handleSubmit = (e)=>{
      e.preventDefault()
      console.log({name})
      if(props.id){
        props.updateTreatment({name, id: props.id})
      }else{
         props.addTreatment({name})
      }
  }
  return (
    <div className="border">
      <h1>{props.id ? "EDIT" :"NEW"}</h1>
      <p>id: {props.id}</p>
      <form onSubmit={handleSubmit}>
        <p>name</p>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button>add</button>
      </form>
    </div>
  );
};

export default TreatmentForm;
