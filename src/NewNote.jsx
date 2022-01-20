import { useState } from "react";
import React from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

import "./App.css";
const NewNote = (props) => {
  const [note, setNewNote] = useState({
    title: "",
    content: "",
  });
  
  const InputEvent = (event) => {
    // const value=event.target.value;
    // const name=event.target.value;

    // Destructuring------------
    const { name, value } = event.target;
    setNewNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };
  function addEvent() {
   
    props.passNote(note);
    setNewNote({
      title: "",
      content: "",
    });
   
   
  }
 
  return (
    <>
      <div className="main_note">
        <form action="#">
         <input
            type="text"
            name="title"
            placeholder="title"
            value={note.title}
            onChange={InputEvent}
            onSubmit={(e)=>{e.preventDefault();}}
          />
          <textarea
            name="content"
            id=""
            cols="30"
            placeholder="Enter your text  here.."
            value={note.content}
            rows="10"
            onChange={InputEvent}
           
          ></textarea>

          {/* Button */}
          <Button
            variant="outlined"
            onClick={addEvent}
            color="warning"
            className="MuiButton-root"
          >
            <AddIcon className="plus_sign" />
          </Button>
        </form>
      </div>
    </>
  );
};

export default NewNote;
