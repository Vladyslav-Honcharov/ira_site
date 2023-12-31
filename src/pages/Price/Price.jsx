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
  tableCellContent: {
    textAlign: "center", // Выравнивание по центру
  },
};

function Price() {
  // // Данные об услугах для бровей
  // const browServices = [
  //   {
  //     name: "Корекція брів",
  //     duration: "30 хвилин",
  //     price: "140 грн",
  //   },

  //   {
  //     name: "Фарбування брів",
  //     duration: "45 хвилин",
  //     price: "140 грн",
  //   },
  //   // Добавьте другие услуги для бровей по аналогии
  // ];

  // Данные об услугах для вій
  const eyelashServices = [
    {
      name: "Класика 1Д",
      duration: "2 години",
      price: "600 грн",
    },
    {
      name: "Об'єм 2Д",
      duration: "2 години",
      price: "650 грн",
    },
    {
      name: "Об'єм 3Д",
      duration: "2 години",
      price: "700 грн",
    },
    {
      name: "Об'єм 4Д",
      duration: "2 години",
      price: "750 грн",
    },
    {
      name: "Вії в кольорі Темний шоколад",
      duration: "+",
      price: "50 грн",
    },
    {
      name: "L/M Вигин",
      duration: "+",
      price: "50 грн",
    },
    {
      name: "Мокрий ефект",
      duration: "+",
      price: "50 грн",
    },
    {
      name: "Промінчики",
      duration: "+",
      price: "50 грн",
    },
    {
      name: "Зняття моєї роботи без нарощування",
      duration: "15 хвилин",
      price: "100 грн",
    },

    {
      name: "Зняття роботи іншого майстра",
      duration: "15 хвилин",
      price: "100 грн",
    },

    {
      name: "Зняття моєї роботи з подальшим нарощуванням",
      duration: "",
      price: "0 грн",
    },

    // Добавьте другие услуги для вій по аналогии
  ];
  // Данные об обучение
  const educations = [
    {
      name: "Навчання",
      duration: "3 дні",
      price: "5000 грн",
    },
  ];

  return (
    <div style={useStyles.price}>
      <Paper style={useStyles.tableContainer}>
        <Typography variant="h5" align="center">
          Послуги для вій
        </Typography>
        <Table style={useStyles.table}>
          <TableHead>
            <TableRow style={useStyles.tableHead}>
              <TableCell style={useStyles.tableCellContent}>Послуга</TableCell>
              <TableCell style={useStyles.tableCellContent}>
                Тривалість
              </TableCell>
              <TableCell style={useStyles.tableCellContent}>Ціна</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {eyelashServices.map((service, index) => (
              <TableRow key={index} style={useStyles.tableRow} hover={true}>
                <TableCell style={useStyles.tableCellContent}>
                  {service.name}
                </TableCell>
                <TableCell style={useStyles.tableCellContent}>
                  {service.duration}
                </TableCell>
                <TableCell style={useStyles.tableCellContent}>
                  {service.price}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      {/* <Paper style={useStyles.tableContainer}>
        <Typography variant="h5" align="center">
          Послуги для брів
        </Typography>
        <Table style={useStyles.table}>
          <TableHead>
            <TableRow style={useStyles.tableHead}>
              <TableCell style={useStyles.tableCellContent}>Послуга</TableCell>
              <TableCell style={useStyles.tableCellContent}>
                Тривалість
              </TableCell>
              <TableCell style={useStyles.tableCellContent}>Ціна</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {browServices.map((service, index) => (
              <TableRow key={index} style={useStyles.tableRow} hover={true}>
                <TableCell style={useStyles.tableCellContent}>
                  {service.name}
                </TableCell>
                <TableCell style={useStyles.tableCellContent}>
                  {service.duration}
                </TableCell>
                <TableCell style={useStyles.tableCellContent}>
                  {service.price}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper> */}

      <Paper style={useStyles.tableContainer}>
        <Typography variant="h5" align="center">
          Навчання
        </Typography>
        <Table style={useStyles.table}>
          <TableHead>
            <TableRow style={useStyles.tableHead}>
              <TableCell style={useStyles.tableCellContent}>Послуга</TableCell>
              <TableCell style={useStyles.tableCellContent}>
                Тривалість
              </TableCell>
              <TableCell style={useStyles.tableCellContent}>Ціна</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {educations.map((service, index) => (
              <TableRow key={index} style={useStyles.tableRow} hover={true}>
                <TableCell style={useStyles.tableCellContent}>
                  {service.name}
                </TableCell>
                <TableCell style={useStyles.tableCellContent}>
                  {service.duration}
                </TableCell>
                <TableCell style={useStyles.tableCellContent}>
                  {service.price}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}

export default Price;
