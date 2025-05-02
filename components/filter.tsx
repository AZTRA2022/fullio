import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import * as React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { ListFilterPlus } from "lucide-react"
import { useState } from "react"

type SliderProps = React.ComponentProps<typeof Slider>



export default function Filter(){
    const [sliderValue, setSliderValue] = useState(20)
    
    return (
        <Popover>
                        <PopoverTrigger asChild>
                            <Button variant="outline"> <ListFilterPlus size={20} color="black" /> filter</Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-80">
                            <div className="grid gap-4">
                                <div className="space-y-2">
                                
                                    <h4 className="font-medium leading-none">  Filter</h4>
                                    <p className="text-sm text-muted-foreground">
                                        Add some filter options.
                                    </p>
                                </div>
                                <div className="grid gap-2">
                                    <div className="grid grid-cols-3 items-center gap-4">
                                        <Label htmlFor="width">categories</Label>
                                        <Select>
                                            <SelectTrigger className="w-[180px]">
                                                <SelectValue placeholder="Select a category" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Pick one </SelectLabel>
                                                    <SelectItem value="Cinama">Cinama</SelectItem>
                                                    <SelectItem value="Music">Music</SelectItem>
                                                    <SelectItem value="Social Network">social Network</SelectItem>
                                                    <SelectItem value="Science">Sciences</SelectItem>
                                                    <SelectItem value="Collaboration">Collaboration</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
        
                                    </div>
                                    <div className="grid grid-cols-3 items-center">
                                        <Label htmlFor="maxWidth">Quantity: {sliderValue == 100 ? "Max" : sliderValue} </Label>
                                        <Slider
                                            defaultValue={[sliderValue]} 
                                            className="ml-2"
                                            onValueChange={(value) => { 
                                                setSliderValue(value[0]);
                                            }}
                                            max={100}
                                            step={1}
                                        />
                                    </div>
                                </div>
                            </div>
                        </PopoverContent>
                    </Popover>
    )
}