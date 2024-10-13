import { useState,useEffect } from "react";
import axios from "axios";

export default function useFetchPosts({endpoint}){

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{
            const fetchData = async ()=>{
                try{
                    const res = await axios.get(endpoint);
                    setData(res.data);
                }
                catch(e){
                    setError(e);
                    console.log(`Error from hitting endpoint ${endpoint} with message ${e.message}`);
                }
                finally{
                    setLoading(false);
                }
            };
            fetchData();
    },[endpoint])

    return{data,loading,error};
};