
import React, { useRef, useState } from "react";

function Mapping() {
    const list1 = [
        ['Home','Contact','About']
    
    ];
    // const listing = list1.flat()
    const result = list1.map(() => <h4>{ list1 }</h4>)

    return (
        <>
            {result}
        </>
  )
}

export default Mapping



