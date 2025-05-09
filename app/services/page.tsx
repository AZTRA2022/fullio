// src/pages/services.tsx
'use client';

import Container from "@/components/container";
import Navbar from "@/components/navbar";
import Searchbar from "@/components/searchbar";
import supabase from "@/lib/supabase";
import { useEffect, useState } from "react";

export default  function Services() {

  useEffect(()=>{
    async function checkStatus(){
      let status = await  supabase.auth.getSession();
        if (status.data.session){
          console.log(status)
        }else{
          window.location.href = "/login"
        }
    }
    checkStatus()
  },[])

  return (
    <div className="flex flex-col items-center w-full h-screen">
      <Navbar />
      <Searchbar />
      <Container query="Aztra Convention 20 March 2026" data={""} />
    </div>
  );
}