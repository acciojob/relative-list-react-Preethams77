import React,{useState}from 'react'

const App = () => {
  const[relatives,setRelatives]=useState(["motherinlaw","fatherinlaw","brotherinlaw","sisterinlaw"]);
  return (
    <div id="main">
      <ol>
        {relatives.map((relative,idx)=>{
          console.log(relative + idx);
          return <li key={relative + idx}>Name:{relative}</li>;
        })}
      </ol>
              
    </div>
  );
};
export default App;
