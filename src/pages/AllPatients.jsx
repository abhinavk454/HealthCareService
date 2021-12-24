import React, { Component } from "react";
import NavBar from "./NavBar.jsx";
import "../App.css";

class AllPatients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patientsList: []
    };
    this.handleView = this.handleView.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount() {
    this.getPatientsList();
  }
  getPatientsList() {
    //write code here to load patient details to display the patient list in UI
  }
  handleView(id) {
    this.props.history.push(`/viewPatient/${id}`);
  }

  render() {
    const { patientsList } = this.state;

    return (
      <div style={{ height: "100%" }}>
        <NavBar />
        <form style={{ display: "flex", height: "100%", alignItems: "center" }}>
          {patientsList.length === 0 ? (
            <h1 style={{ textAlign: "center", flexGrow: "1" }}>
              No Patients Found
            </h1>
          ) : (
              <div style={{ width: "100%", height: "100%" }}>
                <div>
                  <p
                    style={{
                      textAlign: "center",
                      paddingBottom: "10px",
                      paddingTop: "10px",
                      fontSize: "2em",
                      color: "black"
                    }}
                  >
                    List of All Patients
                </p>
                </div>
                {patientsList.map((patient, index) => (
                  <div
                    className="FormField"
                    style={{ backgroundColor: "#D3D3D3" }}
                    light
                    expand="md"
                    fontSize="20px"
                  >
                    <span style={{ fontSize: "20px" }} value={patient.patient_email}>
                      {patient.patient_name}
                    </span>
                    {/* Write code here to create View and edit buttons */}
                  </div>
                ))}
              </div>
            )}
        </form>
      </div>
    );
  }
}

export default AllPatients;
