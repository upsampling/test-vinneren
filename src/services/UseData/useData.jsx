import { useState, useMemo } from 'react';
import axios from 'axios';

const baseURL = process.env.REACT_APP_URL_BASE;

export const useDataStarWars = () => {
  const arrayTypes = ['people', 'starships', 'planets'];


  const getItem = localStorage.getItem('people');
  
  useMemo(async()=>{
    if(!getItem){
      for(const endpoint of arrayTypes){
        const url = `${baseURL}/${endpoint}`;
        const res = await axios.get( url );
        localStorage.setItem(endpoint, JSON.stringify(res.data.results));
      }
    }
  }, [])


  // const [data, setData] = useState();
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState();
  // const [endpoint, setEndpoint] = useState();
  
  // const selectType = ( type )=> {
  //   setEndpoint(type);
  // };


  // useMemo(async () => {
  //       setIsLoading(true);
  //   if(endpoint){
  //         const url = `${baseURL}/${endpoint}`;
  //     try {
  //         const res = await axios.get( url );
  //         setIsLoading(false);
  //         setData(res.data.results);
  //         setError(false);
  //     } catch (err) {
  //         console.error('[ERROR][API]: ', err);
  //         setError(true);
  //         setIsLoading(false);
  //     }
  //   }    
    
  // }, [endpoint]);

  // return { data, isLoading, error, selectType };
};
