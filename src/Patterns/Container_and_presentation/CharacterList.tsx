// the component is responsible for displaying the characters

import React from "react";
import { Character } from "./types";

interface CharacterListProps {
  loading: boolean;
  error: boolean;
  characters: Character[];
}

const CharacterList: React.FC<CharacterListProps> = ({
  loading,
  error,
  characters,
}) => {
  if (loading && !error) return <div>Loading...</div>;
  if (!loading && error)
    return <div>error occurred.unable to load characters</div>;
  if (!characters) return null;

  return (
    <>{
        console.log("data is in li format")
    }
    {
    console.log(characters)}
    <ul>
      {characters.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
    </>
  );
};

export default CharacterList;