import React from "react";
import ReactDOM from "react-dom/client";


// React Element
const heading = (
    <h1 className="heading" tabIndex="5">Namaste React</h1>

);

// React Functional Component
const HeadingComponent =() =>(
     <div id="container">
          <h1 className="heading">Namste React Functional Component</h1>
     </div>
);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);

