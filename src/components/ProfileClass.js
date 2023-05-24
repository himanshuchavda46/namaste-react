import React from "react";

class ProfileClass extends React.Component {

    constructor() {
        super();
        console.log("constructor");
        this.state = {
            userInfo: {
                name: "",
                location: ""
            }
        }
    }

    async componentDidMount() {
        console.log("component did mount");
        this.interval = setInterval(()=>console.log("Hello World"),1000);
        const data = await fetch("https://api.github.com/users/himanshuchavda46");
        const jsonData = await data.json();
        console.log(jsonData);
        this.setState({
            userInfo: jsonData
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate");
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }


    render(){
        console.log("render");
        return (
            <div>
                <h2>{this.state.userInfo.name}</h2>
                <h2>{this.state.userInfo.location}</h2>
            </div>
        )
    }
}

export default ProfileClass;
