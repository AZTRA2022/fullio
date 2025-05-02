'use client';

import Container from "@/components/container";
import Navbar from "@/components/navbar";
import Searchbar from "@/components/searchbar";
import { useEffect, useState } from "react";


export default function Services(){
    const [data,setData] = useState()
    useEffect(()=>{
        async function fetchdata(){
            const response = await fetch("https://661049730640280f219cc084.mockapi.io/api/v1/User")
            const serializedResponse = await response.json()
            setData(serializedResponse);
        }
        fetchdata()
    },[])
    return (
        <div className="flex flex-col items-center w-full h-screen " >
            <Navbar />
            <Searchbar />
            <Container query="Aztra Convention 20 March 2026" data={data} />
        </div>
    )
}