import { useState } from 'react';
import './App.css'
import CourseForm from './compoent/courseForm';
import CourseList from './compoent/courseList';
function App() {
  const [courses, setCourses] = useState([
    {name : 'HTML'},
    {name : 'CSS'},
    {name : 'JAVA'}
  ])
  const [current, setCurrent] = useState('')

//#######################################################

  const updateCourse = (e) => {
    setCurrent(e.target.value)
  }

//#######################################################

  const addCourse = (e) => {
    e.preventDefault();
    if(current === ''){
      return;
    }
    const newCourse = [...courses , {name :current}]
    setCourses(newCourse)
    setCurrent('')
  }

//#######################################################
  
  const deleteCourse = (ind) => {
    const newCourse = courses.filter((course , index) => {
      return index !== ind
    }) ; 
    setCourses(newCourse)
  }

//#######################################################

  const editCourse = (index , value) => {
    let newcourses = courses ;
    let course = newcourses[index];
    course['name'] = value ;
    setCourses(newcourses)
  }

//#######################################################

  const courseList = courses.map((course , index) => {
    return <CourseList course={course} key={index} deleteCourse={deleteCourse} index={index} editCourse={editCourse}/>
  })

//#######################################################
  return (
    <div className="App">
      <h2>Add Course</h2>
      <CourseForm updateCourse={updateCourse} addCourse={addCourse} current={current}/>
      <ul>
        {courseList}
      </ul>
    </div>
  );
}

export default App;
