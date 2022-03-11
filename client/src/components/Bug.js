import axios from "axios";
import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Bug = (props) => {
  const navigate = useNavigate();
  const { name, id, bug_type, deleteBug} = props;


  return (
    <div className="border">
      <h1 style={{fontSize:'46px'}}>Bug</h1>
      <p>id: {id}</p>
      <p>name: {name}</p>
      <p>bug_type: {bug_type}</p>
      <Link to={ `/bugs/${id}`}  state={{name, id, bug_type}}>show</Link>
      <button onClick={() => deleteBug(id)}>delete</button>
      <button
        onClick={() =>
          navigate(`/bugs/${id}/edit`, { state: { name, id, bug_type } })
        }
      >
        edit
      </button>
    </div>
  );
};

export default Bug;
