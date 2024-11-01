import React, { useEffect,useState} from "react";
//import CharacterList from "./CharacterList";
import { Character} from "./types";

const StarWarsCharactersContainer: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const getCharacters = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://akabab.github.io/starwars-api/api/all.json",
      );
      const data = await response.json();
      setIsLoading(false);
      if (data){setCharacters(data)}else{return};
    //   console.log("data is in data")
    //   console.log(data)
    } catch (err) {
      setError(true);
    } finally {
      setIsLoading(true);
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);
//   console.log("data is incharacters ")
//   console.log(characters)
  return (
    //<CharacterList loading={isLoading} error={error} characters={characters} />
    console.log("helo")
  );
};

export default StarWarsCharactersContainer;