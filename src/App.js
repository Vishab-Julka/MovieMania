import React from "react";
import DefaultHOC from "./HOC/DefaultHoc";

function HomePage()
{
  return <h1>This is Home Page inserted btw the header and the footer</h1>
}

function ContactPage()
{
  return <h1>This is Contact Page inserted btw the header and the footer</h1>
}

function App() {
  return (
    <div className="App">
      <DefaultHOC path="/" exact component={HomePage} />
      <DefaultHOC path="/contact" exact component={ContactPage} />
    </div>
  );
}

export default App;
