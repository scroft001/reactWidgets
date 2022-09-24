import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

const items = [
    {
        title: "What is react?",
        content: "React is a front end javascript framework"
    },
    {
        title:"Why use React?",
        content: "React is a favorited javascript framework for engineers"
    },
    {
        title: "How do you use React?",
        content: "You use React by creating components"
    }
]

export default () => {
    return(
        <div>
            {/* <Accordion items={items}/> */}
            <Search />
        </div>
        
    )
}