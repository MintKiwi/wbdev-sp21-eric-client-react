import React from "react";
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import CourseEditor from "./course-editor";
import {Route} from "react-router-dom";

class CourseManager extends React.Component{
    state={Courses:[{title:"CS5610",owner:"Alice",lastModified:"1/2/2021"},
                    {title:"CS1610",owner:"Alice",lastModified:"1/2/2021"}]}

    addCourse=()=>{
        const newCourse={
            title:"New Course",
            owner: "new Owner",
            lastModified: "Never"
        }
        this.state.Courses.push(newCourse)
        this.setState(this.state)
    }

    deleteCourse=(courseToDelete)=>{
        const newCourses = this.state.Courses.filter(course=>course!==courseToDelete)
        this.setState({
            Courses:newCourses
        })


    }
    render(){
        return(
            <div>
                <h1>Course Manager</h1>
                <button onClick={this.addCourse}>Add Course</button>
                <Route path="/courses/table">
                    <CourseTable deleteCourse={this.deleteCourse} courses={this.state.Courses}/>
                </Route>
                <CourseGrid deleteCourse={this.deleteCourse} courses={this.state.Courses}/>

                <CourseEditor/>
            </div>
        )
    }
}

export default CourseManager