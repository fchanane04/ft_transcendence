import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.css'
import './css/style.css'

let connected: boolean = false
let classes = (c: boolean) =>
{
  let n = "content";
  !c ? n+= " off-line" : " on-line";
  return n;
}

function App() {
  return (
    <div className={classes(connected)}>
      <Header />
      <Body connected="false"/>
      <Footer />
    </div>
  );
}

export default App;

// import React from 'react';
// import ReactDOM from 'react-dom';

// const App = () => {
//   return <div>Hello, World!</div>;
// };

// ReactDOM.render(<App />, document.getElementById('root'));