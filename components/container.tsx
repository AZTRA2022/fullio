'use client'
import { Separator } from "./ui/separator";


export default function Container({query,data}:{query:string, data:any}){
    if(data){
        console.log(data)
    }
    return (
        <div className=" w-full h-10/12 absolute bottom-0" >
            <h1 className="text-zinc-700  text-sm ml-8 mt-4 font-bold " >{query}</h1>
            <Separator className="my-4 w-11/12" />
        </div>
    )
}