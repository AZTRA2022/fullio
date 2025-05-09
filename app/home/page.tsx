'use client'

import { useState, useEffect } from "react";
import supabase from "@/lib/supabase";

export default function Home(){
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
        <div className="h-screen w-full items-center justify-center bg-zinc-100 " >

        </div>
    )
}