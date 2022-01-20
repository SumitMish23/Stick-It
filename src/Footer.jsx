
import React from 'react';
import './App.css';

const Footer=()=> {
    const year=new Date().getFullYear();
    
    
  return (
  <>
  <div className="footer">
     <p><b>copyright @</b> {year}</p>
     </div>
  </>
  );
}

export default Footer;