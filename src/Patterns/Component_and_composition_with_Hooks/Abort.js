// const controller=new AbortController()
// const signal=controller.signal;
// const api_url="https://akabab.github.io/starwars-api/api/all.json"
// const feth_data=()=>{
//     fetch(api_url,{signal}).then((res)=>res.json()).then(data=>console.log(data)).catch((err)=>{
//         if(err.name==='AbortError'){
//             console.log('Fetch aborted')
//         }
//         else{
//             console.log("Fetch errror",err)
//         }
//     })
    
//     setTimeout(() => {
//         controller.abort()  // Abort the fetch request after 2 seconds
//         console.log('Fetch request aborted after 2 seconds')
        
//     },2000) 
// }
// export default feth_data;