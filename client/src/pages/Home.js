import React, { useContext, useEffect } from "react";
import { DataContext } from "../providers/DataProvider";

const Home = () => {
  useEffect(() => {
    console.log("Use effect in home called");
  }, []);
  const { bugData, deleteTreatment, deleteBug } = useContext(DataContext);

  // [{bug:{id, name,}}, treatments:[{id, name, success_rate}]]
  const renderBugData = () => {
    return bugData.map((bd) => {
      return (
        <div className="border" key={bd.bug.id} >
          <p>bug name:{bd.bug.name}</p>
          <p>bug id:{bd.bug.id}</p>
          <button onClick={()=>deleteBug(bd.bug.id)}>Delete Bug</button>
          <div className="border">
            {bd.treatments.map((t) => {
              return (
                <div className="border" key={t.id}>
                  <p >name: {t.name}</p>
                  <p >id: {t.id}</p>
                  <button onClick={()=>deleteTreatment(bd.bug.id, t.id)}>Delete treatment</button>
                </div>
              );
            })}
          </div>
        </div>
      );
    });
  };
  return (
    <div>
      <h1>Home!!!</h1>
      <hr />
      <div className="border">{renderBugData()}</div>
      <hr />
      <p className="border">{JSON.stringify(bugData)}</p>
    </div>
  );
};

export default Home;
