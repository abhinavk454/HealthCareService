import React, { Component } from "react";
import NavBar from "./NavBar";

class ViewAppointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appointmentId: props.match.params.appId,
      appointmentDetails: {}
    };

    this.handleClose = this.handleClose.bind(this);
  }
  componentDidMount() {
    this.getAppointmentDetails();
  }
  getAppointmentDetails() {
    //write code here to load the appointment details from backend ,that to be viewed .
  }

  handleClose(e) {
    this.props.history.push("/allAppointments");
  }

  render() {
    const { appointmentDetails } = this.state;
    const appointmentDate = new Date(this.state.appointmentDetails.tentativeDate).toLocaleDateString();
    if (!appointmentDetails) {
      return <h1>No appointments found</h1>
    }
    return (
      <div>
        <NavBar />
        <div>
          <div>
            <p
              style={{
                textAlign: "center",
                paddingBottom: "10px",
                paddingTop: "30px",
                fontSize: "2em"
              }}
            >
              Viewing Appointment
            </p>
          </div>
        </div>
        <div className="FormCenter">
          <form onSubmit={this.handleSubmit} className="FormFields">
            {/* Write code here to write fields related to patientID, disease,appdate,slot,description,close buttons */}
          </form>
        </div>
      </div>
    );
  }
}

export default ViewAppointment;
