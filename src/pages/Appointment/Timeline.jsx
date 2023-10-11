import React, { useEffect, useState } from "react";
import "./Timeline.scss";
import {
  getFirestore,
  collection,
  query,
  orderBy,
  getDocs,
} from "firebase/firestore";
import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { initializeApp } from "firebase/app";
import { useAppointmentContext } from "./AppointmentContext"; // Импортируйте контекст

const useStyles = {
  timeline: {
    fontWeight: "bold",
  },
  tableContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  tableHeaderCell: {
    fontWeight: "bold",
  },
  head: {
    textAlign: "center",
  },
  table: {
    backgroundColor: "rgba(215, 209, 209, 0.5)", // Установите задний фон таблицы
    borderRadius: "20px",
  },
};

// Конфигурация Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBQFTiKg7DCKv2kCZ_CjzG_9Po-imwtmeM",
  authDomain: "ira-site.firebaseapp.com",
  projectId: "ira-site",
  storageBucket: "ira-site.appspot.com",
  messagingSenderId: "16883500777",
  appId: "1:16883500777:web:a0183e891718ac732d5278",
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function Timeline() {
  const [sessions, setSessions] = useState([]);
  const { selectedSession, selectSession } = useAppointmentContext(); // Получите выбранный сеанс и функцию для его выбора

  useEffect(() => {
    fetchDataFromFirebase();
  }, []);

  const fetchDataFromFirebase = async () => {
    const sessionsCollection = collection(db, "sessions");
    const sessionsQuery = query(
      sessionsCollection,
      orderBy("date", "asc") // Сортируем по дате в порядке возрастания
    );

    const sessionDocs = await getDocs(sessionsQuery);
    const sessionsWithId = []; // Массив, в котором будут храниться объекты { id, data }

    sessionDocs.forEach((doc) => {
      const id = doc.id; // Получаем id документа
      const data = doc.data(); // Получаем данные документа
      const sessionWithId = { id, ...data }; // Создаем объект с id и данными
      sessionsWithId.push(sessionWithId);
    });

    console.log(sessionsWithId);
    setSessions(sessionsWithId); // Устанавливаем полученные данные в состояние
  };

  // Группировка записей по датам
  const groupSessionsByDate = () => {
    const groupedSessions = {};

    sessions.forEach((session) => {
      const dateKey = session.date.toDate().toLocaleDateString("ru-UA", {
        day: "numeric",
        month: "numeric",
      });

      if (!groupedSessions[dateKey]) {
        groupedSessions[dateKey] = [];
      }

      groupedSessions[dateKey].push(session);
    });

    return groupedSessions;
  };
  const renderSchedule = () => {
    const groupedSessions = groupSessionsByDate();

    const dateKeys = Object.keys(groupedSessions);

    return dateKeys.map((dateKey, index) => (
      <TableRow key={dateKey} hover={true}>
        <TableCell>{dateKey}</TableCell>
        <TableCell>
          {groupedSessions[dateKey].map((session, index) => (
            <span
              key={index}
              onClick={() => {
                selectSession(session);
              }}
              style={{
                cursor: "pointer",
                textDecoration: "underline",
                color: selectedSession === session ? "blue" : "inherit",
              }}
            >
              {session.date.toDate().toLocaleTimeString("ru-UA", {
                hour: "numeric",
                minute: "numeric",
              })}
              {index < groupedSessions[dateKey].length - 1 && " / "}
            </span>
          ))}
        </TableCell>
        {/* Другие поля данных */}
      </TableRow>
    ));
  };

  return (
    <div className={useStyles.timeline}>
      <div
        className={useStyles.head}
        style={{
          fontSize: "24px",
          textAlign: "center",
          marginBottom: 5,
          color: "antiquewhite",
        }}
      >
        Графік
      </div>
      <div className="timeline__content">
        <Grid container justifyContent="center" sx={{ marginBottom: "30px" }}>
          <Grid item xs={12} md={10}>
            <Paper
              elevation={3}
              className={useStyles.tableContainer}
              sx={{ background: "none" }}
            >
              <TableContainer>
                <Table sx={useStyles.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell className={useStyles.tableHeaderCell}>
                        Дата и время
                      </TableCell>
                      {/* Другие заголовки для полей данных */}
                    </TableRow>
                  </TableHead>
                  <TableBody>{renderSchedule()}</TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Timeline;
