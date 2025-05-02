import { Skeleton } from "@/components/ui/skeleton"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import { BellRing, Check, User } from "lucide-react"
   
export function Skel() {
  return (
    <div className="flex items-center space-x-4">
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
      <Avatar className="w-10" >
        <AvatarImage src={undefined} alt="@shadcn" />
        <AvatarFallback>
            <User />
        </AvatarFallback>
            <span className="flex h-2 w-2 translate-y-1 translate-x-[-5px] rounded-full bg-red-500" />
    </Avatar>
    </div>
  )
}
