import React, { Component } from "react";
import NavBar from "./NavBar.jsx";
import "../App.css";

class AllAppointments extends Component {
  constructor() {
    super();
    this.state = {
      appointmentsList: []//appDetailsData.getData()
    };
    this.handleView = this.handleView.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount() {
    this.getAppointmentsList();
  }
  getAppointmentsList() {
    //write code here to load appointment detail from backend to display appointment list
  }
  handleView(appId) {

    this.props.history.push(`/viewAppointment/${appId}`);
  }
  handleEdit(appId) {

    this.props.history.push(`/editAppointment/${appId}`);
  }
  handleDelete() {
    //write code here to delete the respective appointment 
  }
  appsList() {
    if (this.state.appointmentsList.length === 0)
      return <h1>No Appointments Found</h1>;
  }
  render() {
    const { appointmentsList } = this.state;

    return (
      <div style={{ height: "100%" }}>
        <NavBar />

        <form style={{ display: "flex", height: "100%", alignItems: "center" }}>
          {appointmentsList.length === 0 ? (
            <h1 style={{ textAlign: "center", flexGrow: "1" }}>
              No Appoinments Found
            </h1>
          ) : (
              <div style={{ height: "100%", width: "100%" }}>
                <div>
                  <p
                    style={{
                      textAlign: "center",
                      paddingBottom: "10px",
                      paddingTop: "10px",
                      fontSize: "2em",
                      color: "Slate Blue"
                    }}
                  >
                    List of All Appointments
                </p>
                </div>
                {appointmentsList.map((appointment, index) => (
                  <div
                    className="FormField"
                    text-align="right"
                    style={{ backgroundColor: "#D3D3D3" }}
                    light
                    expand="md"
                    fontSize="27px"
                  >
                    <span style={{ fontSize: "20px" }}>{appointment.disease}, slot:{appointment.timings}</span>
                    {/* Write code here to create view and delete buttons */}
                  </div>
                ))}
              </div>
            )}
        </form>
      </div>
    );
  }
}

export default AllAppointments;
