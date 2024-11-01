import React, { useEffect, useState } from 'react';
import { Character } from "../Container_and_presentation/types";
import CharacterList from '../Container_and_presentation/CharacterList';
const useFetchStarWarsCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false); // Change error type to string or null

//  const api_url = "https://akabab.github.io/starwars-api/api/all.json";

  const getCharacters = async (controller: AbortController) => {
    setIsLoading(true);
    const signal = controller.signal;

    try {
      const response = await fetch("https://akabab.github.io/starwars-api/api/all.json", {
        method: "GET",
        credentials: "include",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        signal,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`); // Throw error if response is not ok
      }

      const data = await response.json();
      if (data) {
        setCharacters(data);
      }
    } catch (error) {
      console.log("Error occurred:", error);
      setError(error); // Set error message
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const controller = new AbortController(); // Create an AbortController instance

    getCharacters(controller); // Call the function to fetch characters

    return () => {
      controller.abort(); // Cleanup function to abort fetch on unmount
    };
  }, []); // Empty dependency array to run only on mount

  return (
    <CharacterList loading={isLoading} error={error} characters={characters} />
  ); // Return the state
};

export default useFetchStarWarsCharacters;