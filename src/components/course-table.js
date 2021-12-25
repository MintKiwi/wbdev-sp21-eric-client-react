import React from "react";
import CourseRow from "./course-row";
export default class CourseTable extends React.Component{
    constructor(props) {
        super(props);

    }

    render(){
        return(
            <div>
                <h2>Course Table</h2>

                <table className="table">
                    <tbody>
                        {/*<CourseRow title="CS5610" owner="Alice" lastModified={"1/2/2021"}/>*/}
                        {/*<CourseRow title="CS3200" owner="Bob" lastModified={"1/3/2021"}/>*/}
                        {/*<CourseRow title="CS7800" owner="Dan" lastModified={"1/4/2021"}/>*/}
                        {
                            this.props.courses.map((course,index)=>
                                <CourseRow
                                deleteCourse={this.props.deleteCourse}
                                key={index}
                                course={course}
                                title={course.title}
                                owner={course.owner}
                                lastModified={course.lastModified}
                                />)
                        }
                    </tbody>

                </table>
            </div>
        )
    }

}