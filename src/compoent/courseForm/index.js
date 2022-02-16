import './style.css';
const CourseForm = (props) => {
    return( 
        <div>
            <form className="row" onSubmit={props.addCourse}>
                <input 
                    type="text"  
                    className="col-9"
                    onChange={props.updateCourse}
                    value={props.current}
                    />
                <button type="submit" className="col-3">Add <span>Course</span></button>
            </form>
        </div>
    );
}

export default CourseForm;