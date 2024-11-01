
// import React, { useEffect, useState } from "react";
// const printable=({calculation_table})=>{
//     const[row,setrows]=useState([])
//     useEffect(()=>{
//         console.log("Calculating table...")
//         setrows(calculation_table())
//     },[calculation_table])
//     const rows=row.map((value,index)=>{
//         return(
//             <p key={index}>{index+1}:{value}</p>
//         )
//     })
//     return(
//         <div>
//             {rows}
//         </div>
//     )
//     }

// export default printable;



import React, { useEffect, useRef, useState } from "react";

function printable(){
    const[name,updataName]=useState("")
    const count=useRef(0)
    useEffect(()=>{
        console.log(count.current)
        count.current=count.current+1
        if (count.current>0){console.log("Component render")}
        else{
            console.log("render is not updated")
        }
    })
    return(
        <div>
            <input type="text" onChange={(e)=>{
                updataName(e.target.value)
            }} />

            <h2>Name:{name}</h2>
            <h2>Renders:{count.current}</h2>
        </div>
    )

}
export default  printable;

// import React, { useReducer } from "react";

// const initialstae={count:0}
// function reducer(state,action){
//     switch(action.type){
//         case "increase":
//             return{...state,count:state.count+1};
//         case "decrease":
//             return{...state,count:state.count-1};

//         case "reset":
//             return{...state,count:0};
//         default:
//             return state
//     }
// }


// function printable(){


//     const[state,despatch]=useReducer(reducer,initialstae)


//     const increment=()=>{
//         despatch({type:"increase"})
//         console.log("Increase")
//     }
//     const decrement=()=>{
//         despatch({type:"decrease"})
//         console.log("Decrease")
//     }
//     const reset=()=>{
//         despatch({type:"reset"})
//         console.log("Reset")
//     }
//     return(
//         <div>
//             <h2>Button count:{state.count}</h2>
//             <button onClick={increment}>increment</button>
//             <button onClickCapture={decrement}>decrement</button>
//             <button onClick={reset}>Reset</button>

//         </div>
//     )

// }
// export default  printable;