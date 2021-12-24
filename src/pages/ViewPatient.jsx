import React, { Component } from "react";
import NavBar from "./NavBar.jsx";
import "../App.css";

class BookAppointment extends Component {
  constructor() {
    super();
    this.state = {
      namesList: [],
      namesIdsDic: {},
      name: "",
      disease: "",
      date: "",
      timing: "",
      description: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
    this.handleDropdownNameChange = this.handleDropdownNameChange.bind(this);
  }
  componentDidMount() {
    this.getPatientsList();
  }
  getPatientsList() {
    //write code here load patient details from backend to display patients detail in dropdown field
    
  }
  
  handleDropdownNameChange(e) {
    //write code here to select dropdown value
  
  }

  handleSubmit(e) {
    //write code here to save the appointment detail to backend server.
    //submit should not happen when fields are empty
    //on successfull submit allAppointment page should be displayed in UI.
  }
  handleCancel(e) {
    this.props.history.push("/allAppointments");
  }


  render() {
    const names = this.state.namesList;
    const isEnabled = this.canBeSubmitted();
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
            Booking Appointment
          </p>
        </div>
        <div className="FormCenter">
          <form className="FormFields">
            {/* Write code here to create fields related to name,disease, date,slots,description,cancel,submit fields */}
          </form>
        </div>
      </div>
    );
  }
}

export default BookAppointment;
