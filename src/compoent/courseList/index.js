import { useState } from 'react';
import './style.css';

const CourseList = (props) => {
    const [isEdit, setIsEdit] = useState(false)
    const [edit , setEdit] = useState(props.course.name)

//#######################################################

    const toggaleState = () => {
        setIsEdit(!isEdit)
    }

//#######################################################

    const updateCourseItem = (e) =>{
        e.preventDefault();
        props.editCourse(props.index , edit )
        toggaleState() ;
    }

//#######################################################

    const renderCourse = () => {
        return(
            <li className="row">
                <span className="col-sm-6">{props.course.name}</span> 
                <button className="col-sm-3 edit text-center" onClick={() => toggaleState()}>Edit <span>Course</span></button> 
                <button className="col-sm-3 text-center" onClick={() => props.deleteCourse(props.index)}>Delete <span>Course</span></button>
            </li>
        )
    }

//#######################################################

    const renserUpdateCourse = () => {
        return(
            <form  className="row"> 
                <input type="text" className="col-sm-9" defaultValue={edit} onChange={(e) => setEdit(e.target.value)} />
                <button onClick={updateCourseItem} className="col-sm-3">Update <span>Course</span></button>
            </form>
        )
    }

//#######################################################

    return( 
        <>
            {isEdit ? renserUpdateCourse() : renderCourse()}
        </>
    );
}

export default CourseList;