import Navbar from "@/components/navbar";
import { BrainCircuit, Dna, Hand } from "lucide-react";
import homeImage from '@/public/beautifullGood.png'
import Image from "next/image";
import SignUp from "@/components/signup";

export default function Home() {
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
