import React from "react";
import "./Price.scss";
import {
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";

const useStyles = {
  price: {
    marginTop: "80px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    padding: "20px",
  },
  tableContainer: {
    maxWidth: "1000px",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 10px 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    marginBottom: "20px",
  },
  table: {
    width: "50vw",
  },
  tableHead: {
    background: "#f0f0f0",
    fontWeight: "bold",
  },
  tableRow: {},
};

function Price() {
  // Данные об услугах для бровей
  const browServices = [
    {
      name: "Корекція брів",
      duration: "30 хвилин",
      price: "300 грн",
    },
    {
      name: "Біотату брів",
      duration: "1 година",
      price: "500 грн",
    },
    {
      name: "Фарбування брів",
      duration: "45 хвилин",
      price: "250 грн",
    },
    // Добавьте другие услуги для бровей по аналогии
  ];

  // Данные об услугах для вій
  const eyelashServices = [
    {
      name: "Нарощування вій",
      duration: "2 години",
      price: "700 грн",
    },
    {
      name: "Ламінування вій",
      duration: "1,5 години",
      price: "550 грн",
    },
    // Добавьте другие услуги для вій по аналогии
  ];

  return (
    <div style={useStyles.price}>
      <Typography variant="h4">
        Ціни на послуги майстра по віям і бровам
      </Typography>
      <Paper style={useStyles.tableContainer}>
        <Typography variant="h5" align="center">
          Послуги для брів
        </Typography>
        <Table style={useStyles.table}>
          <TableHead>
            <TableRow style={useStyles.tableHead}>
              <TableCell>Послуга</TableCell>
              <TableCell>Тривалість</TableCell>
              <TableCell>Ціна</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {browServices.map((service, index) => (
              <TableRow key={index} style={useStyles.tableRow} hover={true}>
                <TableCell>{service.name}</TableCell>
                <TableCell>{service.duration}</TableCell>
                <TableCell>{service.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      <Paper style={useStyles.tableContainer}>
        <Typography variant="h5" align="center">
          Послуги для вій
        </Typography>
        <Table style={useStyles.table}>
          <TableHead>
            <TableRow style={useStyles.tableHead}>
              <TableCell>Послуга</TableCell>
              <TableCell>Тривалість</TableCell>
              <TableCell>Ціна</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {eyelashServices.map((service, index) => (
              <TableRow key={index} style={useStyles.tableRow} hover={true}>
                <TableCell>{service.name}</TableCell>
                <TableCell>{service.duration}</TableCell>
                <TableCell>{service.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}

export default Price;
