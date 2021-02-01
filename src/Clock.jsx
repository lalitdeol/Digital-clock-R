import React, { useState } from 'react';



const Clock = () => {
    let newTime = new Date().toLocaleTimeString();
    const [ctime, setCtime ] = useState(newTime);

    const UpTime = () => {
    //   let newCtime = new Date().toLocaleTimeString();
    // setCtime(newCtime);
    
    newTime = new Date().toLocaleTimeString();
    setCtime(newTime);
        
    }

    return(
        <>
        <h1>{newTime}</h1>
        <button onClick = {UpTime}> Get time </button>
        </>
        
    )

};

export default Clock;

