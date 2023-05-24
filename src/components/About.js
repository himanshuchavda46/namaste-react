import React from "react";
import Profile from "./ProfileClass"
class About extends React.Component {

    constructor() {
        super();
        console.log("parent constructor");
    }
    componentDidMount() {
        console.log("parent componentDidMount");
    }

    render(){
        console.log("parent render");
        return (
            <div>
                <Profile />
            </div>
        )
    }

}

export default About;
