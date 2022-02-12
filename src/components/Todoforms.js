import React, { useState } from "react";

export default function Todoforms(props) {
  const [input, setInput] = useState("");

    const handleChange = e =>{
        setInput(e.target.value)
    }
    const submission = (e) =>{
        e.preventDefault();
        props.addTask({
            id:Math.floor(Math.random()*1000000),
            text:input,
            isdone: false
        });
        setInput('');
    }

  return (
    <form className="todo-form">
      <input type="text" onChange={handleChange} className="todo-input" value={input} name="text"/>
      <button type="submit" onClick={submission} className="todo-btn">Add items</button>
    </form>
  );
}
