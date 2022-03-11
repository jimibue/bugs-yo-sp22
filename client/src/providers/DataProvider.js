import axios from "axios";
import React, { useEffect, useState } from "react";

// create context, gives a provider /consumer
// consumer we are not going to use,
// instead we us our DataContext in combo
// with the useContext hook

// where dataYO is going to be the value prop in our provider
// let dataYO = useContext(DataContext)
export const DataContext = React.createContext();

const DataProvider = (props) => {
    const [bugData, SetBugData] = useState([])

    useEffect(()=>{
        console.log('USEEFFECT IN DATAPROVIDER CALLED')
        getBugData()
    },[])
    // {id, name,bug_type,.. }

      // [{bug:{id, name,}}, treatments:[{id, name, success_rate}]]
      // [{bug:{id, name,}}, treatments:[{id, name, success_rate}], {id, name,bug_type,.. }]
    const addBug = (bug)=>{
        SetBugData([...bugData, {bug:bug, treatments:[]}])
    }

    const deleteTreatment = async (bug_id, id)=> {
      // delete from db
        let res = await axios.delete(`/api/bugs/${bug_id}/treatments/${id}`)
      // delete from ui
      const filteredBugs = bugData.map( bd => {
          if(bd.bug.id !== bug_id  ){
              // leave unchanged
              return bd
          } else {
              // leave bug unchanged, 
              return {bug: bd.bug, treatments: bd.treatments.filter(t=> t.id !== id)}
          }
      })

      SetBugData(filteredBugs)
    }

    const deleteBug = async (id)=> {
        // delete from db
       let res = await axios.delete(`/api/bugs/${id}`)
       // delete from ui
       const filteredBugs = bugData.filter( bd => bd.bug.id !== id)
       SetBugData(filteredBugs)
    }

    const getBugData = async  ()=>{
        let res = await axios.get(`/api/all`)
        SetBugData(res.data)
    }
  return (
    <DataContext.Provider value={{ x: '1', bugData, addBug, deleteTreatment, deleteBug }}>
      {props.children}
    </DataContext.Provider>
  );
};
export default DataProvider;

//in another file
// let dataYO = useContext(DataContext)
// let {bugData, x, addBug, deleteTreatment } = useContext(DataContext)
// dataYo = {x:'1', bugData:[{}]}
// dataYo.x = '1'
// data.bugData = '1'
