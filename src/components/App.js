import React, {useState} from 'react';

const App = () => {
  const[relativeListItem,setRelativeListItem]=useState(["motherinlaw","fatherinlaw","brotherinlaw","sisterinlaw","motherinlaw"]);
  return (
    <div id="main">
      <ol id={"relativeList"}>
        {relativeListItem.map((relativeListItem,idx)=>{
          console.log(relativeListItem + idx);
          return <li key={relativeListItem + idx}>Name:{relativeListItem}</li>;
        })}
      </ol>
              
    </div>
  );
};
export default App;
