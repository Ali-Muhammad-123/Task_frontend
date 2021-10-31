import React, { Component } from "react";
import { Link } from "react-router-dom";
import DeleteStudent from "./deleteStudent.js";
import CreateStudent from "./createStudent.js";
import UpdateStudent from "./updateStudents.js";
import FetchStudent from "./fetchStudent.js";

import "../App.css";

import AuthService from "../services/auth.services";

class student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();
    if (user) {
      this.setState({
        currentUser: user
      });
    }
  }

  render() {
    const currentUser  = this.state.currentUser;

    return (
      
      <div>
        <div>
          
            {currentUser!= undefined ?  <div> <CreateStudent/> <DeleteStudent/> <UpdateStudent/> <FetchStudent/> </div>: <h1>Please Login or signup</h1>}
            
        </div>
            
          </div>

          
    );
  }
}

export default student;