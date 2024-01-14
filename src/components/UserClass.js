import React from "react";

class UserClass extends  React.Component {
    constructor(props){
        super(props);

        this.state = {
            count : 0,
            count2:2,
        };
        console.log("child cons");
    }
    componentDidMount() {
        console.log("component mounted");
    }
    render() {
        const {name,location,age} = this.props;
        const {count} = this.state;
        console.log("child render");
        return (
        <div className="user-info">
        <h1>Count:{count}</h1>
        <button onClick= {()=> {
            this.setState ({
                count: this.state.count+1,
            })
        }}>Button</button>
        <h3>Name:{name}</h3>
        <h4>Location :{location}</h4>
        <h4>Age:{age}</h4>
        <h4>Job:Software Engineer</h4>
    </div>
        )
    }
}

export default UserClass;