import React from "react";
import  "./Components/Component.css";


 const Search=()=>{
   const style ={ 
     display:"flex",
      justify:'center',
      backgroundColor:'lightblue',
     marginLeft:'50px',
     alignIterms:'center',
     padding:'10px',
   }
   return (
     <div style={style}>
     <input 
       type="text" 
       placeholder="Search..." />
       </div>
   )
 }
export default Search;