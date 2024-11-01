// import React, { useReducer } from 'react';

// // Define the initial state
// const initialState = { count: 0 };

// // Define the reducer function
// function reducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return { count: state.count + 1 };
//     case 'decrement':
//       return { count: state.count - 1 };
//     default:
//       return state;
//   }
// }

// function Counter() {
//   // Use useReducer instead of useState
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div>
//       <h1>Count: {state.count}</h1>
//       {/* Dispatch actions to the reducer */}
//       <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
//       <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
//     </div>
//   );
// }

// export default Counter;
// import React, { useState,useEffect } from 'react';
// function Button(){
//   const[count,setcount]=useState(0)
//   useEffect(()=>{
//     console.log("use effect",{count})
//     return ()=>{
//       console.log("Clean up use effect",{count})
//     }
//   },[count])
//   return(
//     <div>
//       <h3>Count {count}</h3>
//       <button onClick={()=>{
//         setcount(count+1)
//       }}><h1>Click me</h1></button>
//     </div>
//   )
// }
// export default Button;


// 


// import React,{useState,useContext,useEffect,useLayoutEffect,useRef} from "react";


// function Maincomponent(){
//   const[toggle,setToggle]=useState(false);
//   const textRef=useRef()
//   useLayoutEffect(()=>{
//     console.log("use layout effect")
//   },[toggle])
//   useEffect(()=>{
//     console.log("use effect")
//     if (textRef.current!=null){
//         const dimesions=textRef.current.getBoundingClientRect();
//         textRef.current.style.paddingTop=`${dimesions.height}px`
//     }
//   },[toggle])
//   return(
//     <div>
//       <button onClick={()=>{
//         setToggle(!toggle)
//       }}>Toogle</button>
//       {toggle &&<h3 ref={textRef}>Code bless</h3>}
//     </div>
//   )
// }
// export default Maincomponent


// import React, { useState, useMemo } from "react";

// function Maincomponent() {
//   const [number, setNumber] = useState(0);
//   const [dark, setDark] = useState(false);
//   // Use useMemo to memoize the expensive calculation
//   const calculation=useMemo(()=>{
//     return expensiveFunction(number);
//   }
//   ,[number])
//   const cssStyle = {
//     background: dark ? "black" : "white",  // Corrected "dark" to "black"
//     color: dark ? "white" : "black",
//   };
//   return (
//     <div style={cssStyle}>
//       <input
//         type="number"
//         value={number} // Correctly binding value to input
//         onChange={(e) => setNumber(parseInt(e.target.valueAsNumber))} // Ensure number type
//       />
//       <h2>Calculation: {calculation}</h2>
//       <button onClick={() => setDark(!dark)}>Toggle Dark Mode</button>
//     </div>
//   );

//   // Expensive function that is memoized
//   function expensiveFunction(num) {
//     console.log("Loop is start");
//     for (let i = 0; i < 10; i++) {} // Simulate a heavy computation
//     return num;
//   }
// } 
// export default Maincomponent;



// import React,{useState,useCallback} from "react";
// import Printable  from "./printable";
// function Maincomponent(){

//   const[number,Setnumber]=useState(0)
//   const[darktheme,Setdarktheme]=useState(false)
//   const calculation_table=useCallback(()=>{
//     return [number*1,number*2,number*3,number*4,number*5]
//   },[number]);
//   const cssStyle = {
//         background: darktheme ? "black" : "white",  // Corrected "dark" to "black"
//         color: darktheme ? "white" : "black",
//       };
//       return(
//         <div style={cssStyle}>
//           <input type="number" value={number} onChange={(e)=>{
//             Setnumber(e.target.valueAsNumber)
//           }} />
//         <Printable calculation_table={calculation_table}/>
//         <button onClick={()=>{
//           Setdarktheme(!darktheme)
//         }}>Toogele</button>

//         </div>
//       )

// }
// export default Maincomponent

// import React, { useState } from "react";

// function Maincomponent() {
//   const [foods, setFood] = useState(["Banana", "Apple", "Orange"]);

//   // Function to add food to the list
//   function addFood() {
//     const newFood = document.getElementById("food_id").value.trim();
//     if (newFood) {  // Only add non-empty values
//       setFood((f) => [...f, newFood]);
//       document.getElementById("food_id").value = "";
//     }
//   }

//   // Function to remove food by name from the list
//   function removeFoodByName() {
//     const removeFood = document.getElementById("food_id_remove").value.trim();
//     if (removeFood) {
//       setFood(foods.filter((food) => food.toLowerCase() !== removeFood.toLowerCase()));
//       document.getElementById("food_id_remove").value = "";  // Clear the input after removing
//     }
//   }

//   // Function to handle "Enter" key press for adding food
//   function handleAddFoodKeyPress(event) {
//     if (event.key === "Enter") {
//       addFood();  // Call addFood when "Enter" is pressed
//     }
//   }

//   // Function to handle "Enter" key press for removing food
//   function handleRemoveFoodKeyPress(event) {
//     if (event.key === "Enter") {
//       removeFoodByName();  // Call removeFoodByName when "Enter" is pressed
//     }
//   }

//   return (
//     <div>
//       <h1>Food List</h1>
//       <ul>
//         <div>
//           {foods.map((food, index) => {
//             return (
//               <li key={index}>
//                 {food}
//               </li>
//             );
//           })}
//         </div>
//       </ul>

//       {/* Input field for adding food */}
//       <input
//         type="text"
//         id="food_id"
//         placeholder="Enter Food item"
//         onKeyDown={handleAddFoodKeyPress}  // Listen for "Enter" to add food
//       />
//       <button onClick={addFood}>Add Food</button>

//       {/* Input field for removing food by name */}
//       <input
//         type="text"
//         id="food_id_remove"
//         placeholder="Enter Food to remove"
//         onKeyDown={handleRemoveFoodKeyPress}  // Listen for "Enter" to remove food
//       />
//       <button onClick={removeFoodByName}>Remove Food</button>
//     </div>
//   );
// }


// import React, { useState } from "react";

// function Maincomponent() {
//   const [task, setTask] = useState([
//     "Go to bed",
//     "Wake up in the morning",
//     "Set time at 3 o'clock"
//   ]);
//   const [newtask, setNewTask] = useState("");

//   // Handle input change
//   function inputHandling(event) {
//     setNewTask(event.target.value);
//   }

//   // Add new task
//   function addTask() {
//     if (newtask.trim()) {  // Only add if the task is not empty
//       setTask((prevTasks) => [...prevTasks, newtask]);
//       setNewTask("");  // Clear input after adding
//     }
//   }

//   // Delete a task
//   function deleteTask(index) {
//     setTask((prevTasks) => prevTasks.filter((_, i) => i !== index));
//   }

//   // Move task up
//   function upTask(index) {
//     if (index > 0) {
//       const newTasks = [...task];
//       [newTasks[index], newTasks[index - 1]] = [newTasks[index - 1], newTasks[index]];
//       setTask(newTasks);
//     }
//   }

//   // Move task down
//   function downTask(index) {
//     if (index < task.length - 1) {
//       const newTasks = [...task];
//       [newTasks[index], newTasks[index + 1]] = [newTasks[index + 1], newTasks[index]];
//       setTask(newTasks);
//     }
//   }
//   function keyhadling(event){
//     if(event.key==='Enter'){
//         addTask();
//     }
// }


//   return (
//     <div className="Todocss">
//       <h1>Todo List</h1>
//       <input
//         type="text"
//         placeholder="Enter the task"
//         value={newtask}

//         onChange={inputHandling}
//         onKeyDown={keyhadling}
//       />
//       <button onClick={addTask}>Add</button>
//       <ol>
//         {task.map((task, index) => (
//           <li key={index}>
//             <span>{task}</span>
//             <button onClick={() => deleteTask(index)} className="Delete">Delete</button>
//             <button onClick={() => upTask(index)} className="Move_up">Up</button>
//             <button onClick={() => downTask(index)} className="Move_down">Down</button>
//           </li>
//         ))}
//       </ol>
//     </div>
//   );
// }

// export default Maincomponent;

// import React, {useState,useEffect } from 'react' 

// function Maincomponent(){
//     const[time,settime]=useState(new Date())
//     useEffect(()=>{
//         const timer=setInterval(() => {
//             settime(new Date())
//         }, (1000));
//         return ()=>{
//             clearInterval(timer)
//         }
//     })
//     function formattime(){
//         let hours=time.getHours();
//         const minutes=time.getMinutes();
//         const seconds=time.getSeconds();
//         const meridiem=hours>=12 ? "PM" :"AM";
//         hours=hours%12 || 12 ;

//         return (`${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`)
//     }
//     function padZero(number){
//         return (number<10 ? "0":"")+number
//     }
//     return(
//         <div className='Clock-container'>
//             <div className='clock'>
//                 <span>{formattime()}</span>
//             </div>
//         </div>
//     )
// }


// export default Maincomponent;

import React, { useEffect, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

function Maincomponent() {
    const [search, setSearch] = useState("");
    const [searchData, setSearchData] = useState([]);
    const [selectedItem, setSelectedItem] = useState(-1); // Track selected item

    // Function to handle search input change
    function handlingSearch(e) {
        setSearch(e.target.value);
    }

    // Function to handle Enter key press for searching
    function handleEnter(event) {
        if (event.key === "ArrowUp" && selectedItem > 0) {
            setSelectedItem((prev) => prev - 1); // Move selection up
        } else if (event.key === "ArrowDown" && selectedItem < searchData.length - 1) {
            setSelectedItem((prev) => prev + 1); // Move selection down
        } else if (event.key === "Enter") {
            if (selectedItem > -1) {
                window.open(searchData[selectedItem].show.url); // Open selected result in new tab
            }
        }
    }

    // Fetch TV shows from the API based on the search input
    useEffect(() => {
        if (search !== "") {
            fetch(`https://api.tvmaze.com/search/shows?q=${search}`)
                .then((res) => res.json())
                .then((data) => setSearchData(data));
        } else {
            setSearchData([]);  // Clear results if search is empty
        }
    }, [search]);

    // Function to clear search input and results
    function clearSearch() {
        setSearch("");  // Clear the search input
        setSelectedItem(-1); // Reset selected item
        setSearchData([]);  // Clear the search results
    }

    return (
        <section className="search-section">
            <div className="search-div" style={{ display: 'flex', alignItems: 'center' }}>
                <input
                    type="text"
                    placeholder="Search..."
                    autoComplete="off"
                    onKeyDown={handleEnter}
                    className="search-input-div"
                    value={search}
                    onChange={handlingSearch}
                    style={{ padding: '5px', fontSize: '16px', flex: 1 }}
                />
                <div className="search-icon" style={{ marginLeft: '10px', display: 'flex', alignItems: 'center' }}>
                    <SearchIcon />
                    {search && (
                        <CloseIcon
                            onClick={clearSearch}
                            style={{ marginLeft: '10px', cursor: 'pointer' }}
                        />
                    )}
                </div>
            </div>

            <div className="search-result" style={{ marginTop: '10px' }}>
                {searchData.length > 0 ? (
                    searchData.map((item, index) => (
                        <a
                            href={item.show.url}
                            key={index}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`search-suggestion-line ${index === selectedItem ? 'active' : ''}`} // Apply active class
                            style={{ display: 'block', marginTop: '10px', textDecoration: 'none', color: 'black' }}
                        >
                            {item.show.name}
                        </a>
                    ))
                ) : (
                    search && <p>No results found</p>  // Message when no results are found
                )}
            </div>
        </section>
    );
}

export default Maincomponent;
