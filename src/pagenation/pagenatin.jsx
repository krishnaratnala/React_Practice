import React, { useState } from "react"
import "./Pagination.css"
const pagenatin = ({totalposts,postPerPage,setCurrentpage}) => {
    let pages=[]
    for(let i =1;Math.ceil(i<totalposts/postPerPage);i++){
        pages.push(i)
    }

    return (
    <div>
        {pages.map((page,index)=>{
            return <button key={index}onClick={()=>{
                setCurrentpage(page)
            }} >{page}</button>
        })}
    </div>
)
}


export default pagenatin;

