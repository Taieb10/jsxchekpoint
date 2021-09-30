import logo from './logo.svg';
import './App.css';
import './style.css';

import srcImage from "./srcImage.jpg"

function App() {
  return (
    <div className="App">
      <div style={{border:"solid 1px black",maxWidth:"100vw"}}>

<h1 className="title">Smadhi Taieb</h1>

<br />

<img src="/20200808_133318.jpg" width="100px"/>

<br />

<img src={srcImage} width="100px"/>

</div>

<iframe width="560" height="315" src="https://www.youtube.com/embed/Lf3AwLzmqQw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  );
}

export default App;
