'use client'

import Navbar from "@/components/navbar";
import homeImage from '@/public/beautifullGood.png'
import Image from "next/image";
import SignUp from "@/components/signup";
import { useEffect } from "react";
import supabase from "@/lib/supabase";

export default function Home() {
  useEffect(()=>{
    async function checkSession(){
      const session = await supabase.auth.getSession();
      if(session.data.session){
      }else{

      }
    }
    checkSession()
  },[])
  return (
    <div className="flex h-screen flex-col items-center justify-items-center  font-[family-name:var(--font-roboto-sans)]">
      <Navbar />
      <div className="grid grid-cols-2 w-full h-full max-xl:grid-cols-1 " >
        <div className="items-center flex flex-col " >
          <Image src={homeImage} alt="homeImage" />
            <div className="text-center ">
              <h1 className="text-2xl " >Official Administration Results (OAR) .</h1>
              <p className="font-light text-center p-4 " >Nous vous prodiguons vos statistiqus ainsi que vos resultats
              <br/>Il vous suffit juste de suivre les etapes mentinnés.
              </p>
            </div>
        </div>
        <div className=" " >
          <SignUp />
        </div>
      </div>
    </div>
  );
}
