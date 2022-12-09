import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

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

const options = [
    {
      label: 'The color red',
      value: 'red'
    },
    {
      label: 'The color blue',
      value: 'blue'
    }, 
    {
      label: 'The color green',
      value: 'green'
    }
  ]

export default () => {
    return(
        <div>
            {/* <Accordion items={items}/> */}
            {/* <Search /> */}
            <Dropdown options={options}/>
        </div>
        
    )
}