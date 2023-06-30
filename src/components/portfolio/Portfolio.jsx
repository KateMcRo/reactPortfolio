import { useState } from "react";

export default function Project() {
    const [state, dispatch] = useState("Hello!");
    return(
        <div>
           {state} I am the Portfolio View
        </div>
        )
}