import { Skeleton } from "@/components/ui/skeleton"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import { User } from "lucide-react"
   
export function Skel() {
  return (
    <div className="flex items-center space-x-4">
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
      <Avatar>
        <AvatarImage src={undefined} alt="@shadcn" />
        <AvatarFallback>
            <User />
        </AvatarFallback>
    </Avatar>
    </div>
  )
}
