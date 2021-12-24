import React, { Component } from "react";
import NavBar from "./NavBar.jsx";
import "../App.css";

class ViewProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admin: {}
    };
    this.handleClose = this.handleClose.bind(this);
  }
  componentDidMount() {
    this.getProfile();
  }
  getProfile() {
    //write code here to load the profile detail from backend ,that to be viewed .
  }
  handleClose(e) {
    e.preventDefault();
    this.props.history.push("/allPatients");
  }

  render() {

    const { admin } = this.state;
    return (
      <div>
        <NavBar />
        <div>
          <h3 style={{ textAlign: "center", paddingBottom: "10px" }}>
            Here are your details
          </h3>
        </div>

        <div className="FormCenter">
          <form onSubmit={this.handleSubmit} className="FormFields">
            {/* Write code here to create the fields related to user_name, user_email,user_dob,user_mobile,location fields and close button */}
          </form>
        </div>
      </div>
    );
  }
}

export default ViewProfile;
