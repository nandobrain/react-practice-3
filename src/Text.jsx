import React from "react";
import { useState, useEffect } from "react";

export default function Text() {
    const [text, setText] = useState("");

    useEffect(() =>{
        console.log("COMPONENT MOUNTED");

        return () => {
            console.log("component unmounted");
        }
    }, [])

    return (
        <>
            <input
                onChange={(event) => {
                    setText(event.target.value);
                }}
            />  
            <h1> {text} </h1>  
        </>
    )
}