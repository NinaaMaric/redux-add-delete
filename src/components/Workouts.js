import React, { useState } from "react";
import Activity from "./Activity";
import { useSelector } from "react-redux";
import AddActivity from "./AddActivity";

const Workouts = () => {
  const state = useSelector((state) => state.activities);
  //console.log(state);

  const [add, setAdd] = useState(false)

  console.log(state);
  return (
    <>
      <div className={"workouts-wrapper"}>
        <h1>My workout:</h1>
        <button onClick={()=>setAdd(!add)}>Add activity</button>

        {add && <AddActivity />}

        {state.map((active) => {
          console.log(active);
          return (
            <Activity
              key={active.id}
              id={active.id}
              name={active.name}
              duration={active.duration}
            />
          );
        })}
      </div>
    </>
  );
};
export default Workouts;
