import React from 'react'
import User from './User';
import UserClass from './UserClass';


class About extends React.Component {
  constructor(props) {
    super(props) ;
    console.log("parent cons");
    }
    
  render() {
    console.log("paremt render");
    return (
      <>
      <User/>
      {/* <UserClass name={"kajalsss"} age={"22"} location={"Himachal"}/> */}
      </>
    )
  }
}
export default About;