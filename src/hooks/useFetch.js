import axios from "axios";
import { useEffect, useState } from "react";

export function useFetch(url) {
  const [heroes, setData ] = useState([]);
    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data);          
        })
    }, []);

  return (
    {heroes}
  )
  
}
