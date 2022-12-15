import React,{useState,useRef, useEffect} from 'react'

function ABC() {
  var r1 = useRef();
  var r2 = useRef();
  useEffect(()=>{
    r1.current.focus();
  },[])
  const [result, setResult] = useState(0)
  function add(){
    setResult(parseInt(r1.current.value)+parseInt(r2.current.value))
  }
  function checkEnter(e){
    if(e.key==='Enter'){
      r2.current.focus();
    }
  }
  return (
    <div>
      <input type="text" ref={r1} onKeyUp={checkEnter}/><br></br>
      <input type="text" ref={r2}/><br></br>
      <button onClick={add}>Add</button>
      <button>Sub</button>
      <h1>{result}</h1>
    </div>
  )
}

export default ABC