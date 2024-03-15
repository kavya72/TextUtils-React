import React, {useState} from 'react';


export default function TextForm(props) {
    const handleUpClick= ()=>{
       // console.log("uppercase button clicked"  + text);
        const newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }
    const handleLoClick= ()=>{
       // console.log("lowercase button clicked"  + text);
        const newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }
    const handleClrClick= ()=>{
        // console.log("Clear text");
         const newText = '';
         setText(newText);
         props.showAlert("Cleared the text written", "success");
     }
    const handleExtractMailClick= ()=>{
        // console.log("Count thge sentence");
         const emailAdd = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
         setEmail(emailAdd);
         props.showAlert("Extracted the email address from the given text", "success");
     }
    const handleOnChange=(event)=>{
       // console.log("On change");
        setText(event.target.value);
    }
    const handleCopy = ()=> {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied the given text", "success");
    }
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))  
        props.showAlert("Removed the extra spaces from the given text", "success");
      }
    const [text, setText] = useState("");
    const [email, setEmail] = useState("");
    //"Enter your test here" is the default value of the text, if we want to update the value of text then we need to use the belw snipper
    //setText("Kavya S");
    //text = "Kavya"; --wrong way to change the state
  return (
    <>
    <div className='container' 
    style={{color: props.mode === 'dark'?'white':'#042743'}}>
        <h2 className='my-4'>{props.heading}</h2>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange= {handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#13466e':'white',
        color:props.mode === 'dark'?'white':'#042743'}}id="myBox" rows="8" 
        ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Covert to Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Covert to Lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtractMailClick}>Extract Email</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClrClick}>Clear Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}> Remove Extra Spaces</button>
    </div>
    <div className='container my-3' style={{color:props.mode === 'dark'?'white':'#042743'}}>
<h2>your text Summary</h2>
<p> {text.split(/\s+/).filter((ele)=> {return ele.length!==0}).length} sentences are present, {text.split(/\s+/).filter((ele)=> {return ele.length!==0}).length}  words and {text.length} characters</p>
<p>It took {0.008 * text.split(/\s+/).filter((ele)=> {return ele.length!==0}).length } to read </p>
<p>Email: {email}</p>
<h4>Preview</h4> <p>{text.length>0 ? text: "Nothing to preview!"}</p>
    </div>
    </>
  );
}
