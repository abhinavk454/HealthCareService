import React, { Component } from "react";
import NavBar from "./NavBar.jsx";
import "../App.css";

class AddPatient extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      dob: "",
      location: "",
      mobile: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }


  handleSubmit(e) {

    //write code here to save patient details in backend server
    //submit should not happen when fields are empty

  }
  handleCancel(e) {
    e.preventDefault();
    this.props.history.push("/allPatients");
  }

  render() {
    const isEnabled = this.canBeSubmitted();
    const name = this.state.name;
    const date = new Date();
    return (
      <div>
        <NavBar />
        <div>
          <p
            style={{
              textAlign: "center",
              paddingBottom: "10px",
              paddingTop: "30px",
              fontSize: "2em"
            }}
          >
            Adding a Patient
          </p>
        </div>
        <div className="FormCenter">
          <form className="FormFields">
            {/* Write code to create name, disease, date, slots, description, submit and cancel buttons */}
          </form>
        </div>
      </div>
    );
  }
}

export default AddPatient;
