import { useState, useMemo } from 'react';
import axios from 'axios';


const baseURL = "https://swapi.dev/api/people";

export const useDataStarWars = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();


  useMemo(async () => {
        setIsLoading(true);
        const url = `${baseURL}`;
    try {
        const res = await axios.get( url );
        setIsLoading(false);
        setData(res.data.results);
        setError(false);
    } catch (err) {
        console.error('[ERROR][API]: ', err);
        setError(true);
        setIsLoading(false);
    }
    
  }, []);

  return { data, isLoading, error };
};
