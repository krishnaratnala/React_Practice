import React  from "react";
import useFetch from "./useFetch";

function App(){
    const data=useFetch("")
    return(
        <>

        {Responses.map((res)=>{
            return(
                <h4 key={res.id}>
                    {res.id}.{res.name}
                </h4>
            )
        })}
        </>
    )

}