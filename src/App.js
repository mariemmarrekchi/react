import React from 'react';
import './style.css';
import './App.css';


import m from './mp.jpg';
function App() {
  return (
    <div>

      <h1 className="title red">My title</h1>

<br/>


<img src="/m2.jpg" width='300px'/>
<br/>

      <img src={m} width='300px'/>


    </div>


  );
}

export default App;
