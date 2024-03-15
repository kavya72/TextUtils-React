//import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import { useState } from 'react';
import Alert from './Components/Alert';
import { BrowserRouter as Router,  Routes, Link, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) =>{
    setAlert({
      mesage: msg,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
 const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode is enable","success")
      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enable","success")
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
        <Router>
      {/* <Navbar title="TextUtils" aboutWeb="About Us" />  */}
      {/* below line using prop(title) and default prop (about) */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      {/*  <Navbar /> is used without prop, which doesnot throw error, it will get the prop info from defaultprop */}
      {/* <div className="container my-3">
        <TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={mode} /> */}
      {/* <About /> */}
      {/* </div> */}
   
         <div className="container my-3">
          <Routes> 
            {/* instead of switch Routes is used and 
            Route is described as given below not as <Route path="about"><About /></Route> */}
            <Route exact path="/about" element = {<About mode={mode} />} />
            <Route exact path="/" element = 
            {<TextForm heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" showAlert={showAlert} mode={mode} />} />
          </Routes>
        </div>
      </Router> 
    </>
  );
}

export default App;
