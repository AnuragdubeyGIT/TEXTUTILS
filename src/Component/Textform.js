import React,{useState} from 'react'




export default function Textform(props) {
    const HandleUpClick=()=>{
      //console.log("Uppercase was clicked"+Text);
      let newText=Text.toUpperCase();
      props.showAlert("converted to Uppercase","success");
      setText(newText)
    }
      const HandlelowClick=()=>{
        
        let newText=Text.toLowerCase();
        props.showAlert("converted to Lowercase","success");
        setText(newText)
      
    }
    const HandleClearClick=()=>{
        
      let newText='';
      props.showAlert("Text has been cleared","success");
      setText(newText)
    
  }
    const HandleCopy=()=>{
     var Text=document.getElementById("Mybox")
      Text.select();
      props.showAlert("copied to clipboard","success");
      
      navigator.clipboard.writeText(Text.value);

      
    
  }
   const removeExtraSpaces=()=>{
   
    let newText=Text.split(/[ ]+/);
    props.showAlert("Removed extra spaces","success");
    
    setText(newText.join(" "))
  
}
    const HandleOnChange=(event)=>{
        //console.log("onchange")
        setText(event.target.value)
      }
    const [Text, setText] = useState("");

    return (
      <>
        <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
          <h1>{props.heading}</h1>    
          <div className="mb-3">
                
          <textarea className="form-control" value={Text} onChange={HandleOnChange} style={{backgroundColor:props.mode ==='dark'?'grey':'white', color:props.mode ==='dark'?'white':'#042743'  }} id="Mybox" rows="8"></textarea>
          </div>
          <button className="btn.btn-primary mx-2" onClick={HandleUpClick}>convert to uppercase </button>
          <button className="btn.btn-primary mx-2" onClick={HandlelowClick}>convert to lowercase </button>
          <button className="btn.btn-primary mx-2" onClick={HandleCopy}>Copytext</button>
          <button className="btn.btn-primary mx-2" onClick={removeExtraSpaces}>Remove space </button>
          <button className="btn.btn-primary mx-2" onClick={HandleClearClick}>Clear Text </button>
          

          <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h2>your text summary</h2>
            <p>{Text.split(" ").length} words and {Text.length} characters</p>
            <p>{0.008*Text.split(" ").length} Minutes required to read</p>
            <h2>Preview</h2>
            <p>{Text.length>0?Text:"Enter something to preview"}</p>
          </div>
  
        </div>
        </>
    )
}
