'use client';
import * as React from "react"
import Filter from "./filter";
import Searchinput from "./searchinput";
export default function Searchbar() {


    return (
        <div className="flex gap-2" >
            <Filter />
            <Searchinput />
        </div>
    )
}