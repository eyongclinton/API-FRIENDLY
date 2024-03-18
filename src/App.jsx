import React from "react";
import { robots } from "./Robots.js";  
import CardList from './CardList.jsx';
import Search from './SearchBox.jsx';
import CBComponent from './Components/ClassBasedComponent.jsx';
import FunctionBaseComponent from './Components/FunctionBaseComponent.jsx';

const App =()=>{
  const style ={ 
     alignIterms:'center', 
   }
  return(
    <>
      <Search />
    <FunctionBaseComponent />
      <br></br>
      <CBComponent />
    <CardList style={style} robots= {robots} />
    </>)
}
  
export default App;