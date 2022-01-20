import React from 'react';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

function Note(props) {
  const deletenote=()=>{
    props.delete(props.id);
    
    
  }
  return (
  <>
  
  <div className="note">
      <h1>{props.title}</h1>
      <br/>
      <p>{props.content} </p>
      <button className='btn' value={props.id} onClick={deletenote}>
      <DeleteOutlinedIcon className="deletenote"/>
      </button>
      
  </div>
  </>
  );
}

export default Note;
