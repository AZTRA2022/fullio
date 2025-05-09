import { Dna } from "lucide-react";
import { Path } from "./path";
import { Skel } from "./skel";

export default function Navbar(){
    return (
        <div className="flex items-center justify-around w-full p-4 " >
            <div className="flex text-lg gap-2" >
                <Dna />
                <h1>BenchMark.io</h1>
                
            </div>
            
            <Skel />
            
        </div>
    )
}