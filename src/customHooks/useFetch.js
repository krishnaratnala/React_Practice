import React,{useState,useEffect} from "react";

const useFetch=(url)=>{
    const [Response,setResponse]=useState([])

    useEffect(()=>{
        fetch(url).then((res)=>{r
        res.json}).then((data)=>{
            setResponse(data)
        })
    },[])

    return Response
}
export default useFetch;