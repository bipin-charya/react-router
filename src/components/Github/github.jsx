import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github(){

    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/bipin-charya')
    //     .then((res)=>res.json())
    //     .then((data)=>{
    //         setData(data)
    //     })
    // },[])
    return(
        <div className="text-center m-4 bg-blue-500 text-ehite p-4 text-3xl">
            Github Followers: {data.followers}
            <img src={data.avatar_url} alt="github-profile" width={150} height={150}/>
        </div>
    )
}
export default Github

export const githubInfoLoader = async()=> {
    const res = await fetch('https://api.github.com/users/bipin-charya')
    return res.json
} 