import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
function App() {
  var [students,setStudents] = React.useState(['ravi','balu','sai','anu','vani']);
  var [selectedGender,setSelectedGender] = React.useState(null);
  var [courses,setCourses] = React.useState([
    'html','css','js','nodejs','react','angular'
  ])
  const [selectCourses, setSelectCourses] = React.useState([])
  function abc(x){
    alert(x)
  }
  function handleGender(e){
    setSelectedGender(e.target.value)
  }
  function handleCourse(e){
    if(e.target.checked){
      setSelectCourses([...selectCourses,e.target.value])
    }
    else{
      var filteredCourses = selectCourses.filter((course)=>{return course!==e.target.value})
      setSelectCourses([...filteredCourses])
    }
  }
  return (
    <div className="border border-2 border-danger p-2 m-2">
    <h1>Hello Edupoly</h1>
    <label htmlFor="">Select Gender</label>
    <input type="radio" name='gender' value='female' onChange={handleGender}/>:Female &nbsp;&nbsp;
    <input type="radio" name='gender' value='male'  onChange={handleGender}/>:male &nbsp;&nbsp;
    <input type="radio" name='gender' value='others'  onChange={handleGender}/>:Others &nbsp;&nbsp;
    <h5>Selected Gender:{selectedGender}</h5>
    <label>Select Courses:</label>
    
    <span>
    {
      courses.map((course)=>{
        return <span><input type='checkbox' value={course} onChange={handleCourse}/><label>{course}</label>&nbsp;&nbsp;</span>
      })
    }
    </span>
    <h5>Selected Courses</h5>
    <ul>
      {
        selectCourses.map((course)=>{
          return <li>{course}</li>
        })
      }
    </ul>
     <ul>
      {
        students.map((student,i)=>{
          return <li onClick={()=>{abc(i)}}>{student}</li>
        })
      }
     </ul>
    </div>
  );
}

export default App;
