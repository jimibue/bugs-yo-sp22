import axios from "axios";
import React, { useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const BugForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [name, setName] = useState(location.state ? location.state.name : "");
  const [bug_type, set_bug_type] = useState(
    location.state ? location.state.bug_type : ""
  );
  const params = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (params.id) {
        await axios.put(`/api/bugs/${params.id}`, {
          name,
          bug_type,
          id: params.id,
        });
      } else {
        await axios.post(`/api/bugs`, { name, bug_type });
      }
      // when bug has been updated
      navigate("/bugs");
    } catch (err) {
      alert("err");
    }
  };
  return (
    <div>
      <h1>{params.id ? "Edit" : "New"} BugForm</h1>
      <form onSubmit={handleSubmit}>
        <p>name</p>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <p>bug type</p>
        <input
          value={bug_type}
          onChange={(e) => set_bug_type(e.target.value)}
        />
        <button>{params.id ? "Update" : "Create"}</button>
      </form>

      <p>id: {params.id ? params.id : "no id"}</p>
      <p>{JSON.stringify(location.state)}</p>
    </div>
  );
};

export default BugForm;
