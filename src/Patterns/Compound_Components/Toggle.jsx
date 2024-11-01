
import React, {createContext, useContext, useState } from 'react'

const ToogleContex=createContext()


function Toogle({childern}){
    const[on,setOn]=useState(false)
    const toogle=()=>setOn(!on)

    return(
        <ToogleContex.Provider value={{on,toogle}}>
            {children}
        </ToogleContex.Provider>
    )
}

Toogle.on=function({childern}){
    const{on}=useContext(ToogleContex)
    return  on ? childern:null
}

Toogle.off=function({childern}){
    const{on}=useContext(ToogleContex)
    return on ?null:childern
}

Toogle.Button=function({childern}){
    const{ on, toggle}=useContext(ToogleContex)
    return(
        <div>
            <button onClick={toggle} {...props}/>
        </div>
    )
}



function App() {
    return (
      <Toggle>
        <Toggle.On>The button is on</Toggle.On>
        <Toggle.Off>The button is off</Toggle.Off>
        <Toggle.Button>Toggle</Toggle.Button>
      </Toggle>
    );
  }

