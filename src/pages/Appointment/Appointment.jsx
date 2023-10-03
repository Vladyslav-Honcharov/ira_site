import React from "react";
import { Grid, Container } from "@mui/material";
import "./Appointment.scss";
import AppointmentForm from "./AppointmentForm"; // Import your renamed component
import Timeline from "./Timeline";
import { AppointmentProvider } from "./AppointmentContext";

const Appointment = () => {
  return (
    <AppointmentProvider>
      <Container className="appointment-container" maxWidth="lg">
        <Grid container spacing={2}>
          <AppointmentForm /> {/* Use your renamed component here */}
          <Grid item xs={12} md={6}>
            <Timeline />
          </Grid>
        </Grid>
      </Container>
    </AppointmentProvider>
  );
};

export default Appointment;
