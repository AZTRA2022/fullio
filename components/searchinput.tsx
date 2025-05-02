import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Searchinput (){
    return (
        <div className="flex gap-2" >
            <Input placeholder="type some stuff here." />
            <Button className="" >
                <Search /> 
                
            </Button>
        </div>
    )
}