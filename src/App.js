import React, {useState} from 'react'
import './App.css';
import { Card } from './components/Card/Card';
import img1 from "./images/bg1.jpg";
import img2 from "./images/bg2.jpg";
import img3 from "./images/bg3.jpg";
import img4 from "./images/bg4.jpg";
import img5 from "./images/bg5.jpg";

const data1 = [
  { title: "First Name", count: 100, img: img1 },
  { title: "Second Name", count: 200, img: img2 },
  { title: "Third Name", count: 300, img: img3 },
  { title: "Fourth Name", count: 400, img: img4 },
  { title: "Five Name", count: 500, img: img5 },
];

function App() {
  
  const [title , setTitle] = useState(false);
  const [text, setText] = useState("");
  const showTitle = (item) => {
    setText(item.title + ' ' + item.count + ' $');
    setTitle(true);
  };
  return (
    <div className="app">
      <h1 className="title">
        {title ? text : "Product $"}</h1>
      <div className="App">
        <Card data1={data1} showTitle={showTitle}/>
      </div>
    </div>
  );
};

export default App;