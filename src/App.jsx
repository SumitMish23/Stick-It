import { useState } from "react";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import NewNote from "./NewNote";
import Note from "./Note";
import "./App.css";

function App() {
  const [addItem, setAddItem] = useState([]);
  const addEventnote=(note)=> {
    setAddItem((prevData) => {
      return [...prevData, note];
      
    });
  };
    const onDelete=(id)=>{
      setAddItem((oldData)=>{
      return oldData.filter((currentdata,index)=>{
       
        return index !==id
          
        })
      })

    }
  return (
    <>
      <Header />
      <NewNote passNote={addEventnote} />
      {addItem.map((val, item) => {
        return (
          <Note key={item} id={item} title={val.title} content={val.content} delete={onDelete} />

        );
      })
      }

      <Footer />
    </>
  );
}

export default App;
