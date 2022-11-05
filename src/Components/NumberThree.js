import React, { useState } from "react";
import FormProper from "./FormProper";
import FormDisplay from "./FormDisplay";

const NumberThree = () => 
{
    const [state, setState] = useState({
        personData: []
    })
    function addData (user) 
    {
        let personData = [...state.personData, user]
        console.log(personData)
        setState(
            {
                personData
            })
    }
    return (
        <>
            <FormProper addData={addData} />
            <FormDisplay personData={state.personData}/>
        </>
    )
}

export default NumberThree