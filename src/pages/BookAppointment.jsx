import React, { Component } from "react";
import NavBar from "./NavBar";

class ViewPatient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patient: {},
      id: props.match.params.id
    };

    this.handleClose = this.handleClose.bind(this);
  }
  componentDidMount() {
    this.getPatientsDetails();
  }
  getPatientsDetails() {
    //write code here to load the patient details from backend ,that to be viewed .
  }

  handleClose(e) {
    this.props.history.push("/allPatients");
  }

  render() {
    const { patient } = this.state;
    if (!patient) {
      return <h1>No patients found</h1>
    }
    return (
      <div>
        <NavBar />
        <div>
          <p
            style={{
              textAlign: "center",
              paddingBottom: "10px",
              paddingTop: "10px",
              fontSize: "2em"
            }}
          >
            Viewing Patient
          </p>
        </div>
        <div className="FormCenter">

          <form onSubmit={this.handleSubmit} className="FormFields">
            {/* Write code here to create the fields related to patient_name,patient_email,patient_dob,location,patient_mobile, and close button */}
          </form>
        </div>
      </div>
    );
  }
}
export default ViewPatient;
