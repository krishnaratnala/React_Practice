
//import List from './List.jsx';
import Button  from './Maincomponent.jsx';

// function App() {
//   const fruits = [
//     { id: 1, name: "Apple", color: "Red" },
//     { id: 2, name: "Banana", color: "Yellow" },
//     { id: 3, name: "Orange", color: "Orange" }
//   ];
//   const vegetables = [
//     { id: 4, name: "Carrot", color: "Orange" },
//     { id: 5, name: "Broccoli", color: "Green" },
//     { id: 6, name: "Cucumber", color: "Yellow" }
//   ];

//   return (
//     <>
//       {fruits.length > 0 && <List category="Fruits" items={fruits} />}
//       {vegetables.length > 0 && <List category="Vegetables" items={vegetables} />}
//     </>
//   );
// }


// function App(){
//   return(
//     <>
//     <Button/>
//     </>
//   )
// }
// App.jsx



import React from 'react';
//import MainContext from './Maincomponent.jsx'
//import Singlepost from './pagenation/singlepost.jsx'
//import Printable from './printable.jsx'
//import Parent from'./Props/parent.jsx'
//import StarWarsCharactersContainer from './Patterns/Container_and_presentation/ StarWarsCharactersContainer.tsx'

//import Abort from "./Patterns/Component_and_composition_with_Hooks/Abort.js"

import  CircleFollower from "./Circle_Mouse_Cursor/CircleFollower.tsx"


//import UsefetchstarWarscharacters from './Patterns/Component_and_composition_with_Hooks/useFetchStarWarsCharacters.tsx'
import AuthComponent from './Patterns/Statemanagement_with_reducers/AuthComponent.tsx'



function App(){
  return(
      <div>
        <AuthComponent/>
      </div>
  )
}
export default App;
