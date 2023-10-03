import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  OutlinedInput,
  Box,
  Grid,
} from "@mui/material";
import { useAppointmentContext } from "./AppointmentContext"; // Импортируйте контекст
import "react-datepicker/dist/react-datepicker.css";
import {
  initialValues,
  procedure,
  validationSchema,
  calculatePrice,
} from "./initialAndShema";
import InputMask from "react-input-mask"; // Импортируем библиотеку для маскирования
import Chip from "@mui/material/Chip"; // Импортируем компонент Chip
import { initializeApp } from "firebase/app";
import { getFirestore, deleteDoc, doc } from "firebase/firestore";
import axios from "axios";
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

const AppointmentForm = () => {
  const [isTrainingSelected, setIsTrainingSelected] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0); // State to store the total price
  const { selectedSession, clearSelectedSession } = useAppointmentContext(); // Получите выбранный сеанс и функцию для его очистки

  const handleProcedureChange = (selectedProcedures) => {
    // Calculate the price when procedures change
    const price = calculatePrice(selectedProcedures);
    setTotalPrice(price);

    // Check if "Навчання" is selected
    const isTrainingSelected = selectedProcedures.includes("Навчання");
    setIsTrainingSelected(isTrainingSelected);
  };

  const sendTG = async (values) => {
    try {
      const TOKEN = "5347978233:AAHvtXwjvqX4vp2C4crq-sbjqnjDOzrnM48";
      const CHAT_ID = "-1001722621027";
      const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

      let text = `
        ✨ Новая запись ✨
        ⚪ Имя клиента: ${values.client} 
        💌 Телефон: ${values.phone}
        Процедура: ${values.procedure.join(", ")}
        Дополнительный контакт: ${values.contacts}
        Примечание: ${values.note}
        Цена: ${totalPrice} грн
        `;

      // Добавьте дату и время только если процедура не "Навчання"
      if (!isTrainingSelected) {
        text += `\n⏰ Дата и время: ${values.formatDate}`;
      }

      await axios.post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      // Проверьте, выбрана ли процедура "Навчання"
      const isTrainingSelected = values.procedure.includes("Навчання");

      if (!selectedSession && !isTrainingSelected) {
        alert("Будь ласка, виберіть дату та час");
        return;
      }
      const formatDate = selectedSession
        ? selectedSession.date.toDate().toLocaleString("ru-UA", {
            day: "numeric",
            month: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
          })
        : "";

      // Если "Навчання" выбрано, установите значение даты и времени в пустую строку
      const dateAndTime = isTrainingSelected ? "" : formatDate;

      if (!isTrainingSelected) {
        // Только если не выбрана процедура "Навчання", удаляем сеанс из базы данных
        const sessionRef = doc(db, "sessions", selectedSession.id);
        await deleteDoc(sessionRef);
      }

      await sendTG({ ...values, formatDate: dateAndTime });
      // Очистите выбранный сеанс из контекста
      clearSelectedSession();

      resetForm({
        values: { ...initialValues, totalPrice: 0 },
      });
      setTotalPrice(0);

      alert(`Дякую, чекаю вас ${formatDate}`);
      window.location.reload();
    } catch (error) {
      console.error("Ошибка при удалении сеанса из базы данных:", error);
    }
  };

  return (
    <Grid
      item
      xs={12}
      md={6}
      className="appointment-form"
      sx={{ marginTop: "55px", justifyContent: "center" }}
    >
      <h2>Запис на процедуру</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <Field
              name="client"
              component={TextField}
              label="Ім'я *"
              fullWidth
              margin="normal"
              variant="outlined"
              // Здесь добавьте value, чтобы передать значение в TextField
              value={values.client}
              onChange={(e) => setFieldValue("client", e.target.value)} // Используйте setFieldValue для обновления значения поля
            />
            <ErrorMessage name="client" component="div" className="error" />
            <Field name="phone">
              {({ field }) => (
                <InputMask
                  {...field}
                  mask="+380999999999"
                  placeholder="+380"
                  maskChar="_"
                >
                  {(inputProps) => (
                    <TextField
                      label="Телефон *"
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      {...inputProps}
                    />
                  )}
                </InputMask>
              )}
            </Field>
            <ErrorMessage name="phone" component="div" className="error" />

            <FormControl
              fullWidth
              margin="normal"
              variant="outlined"
              // sx={{ zIndex: 100 }}
            >
              <InputLabel htmlFor="procedure">Процедура *</InputLabel>
              <Select
                name="procedure"
                labelId="procedure-label"
                id="procedure"
                multiple
                value={values.procedure}
                onChange={(e) => {
                  const selectedProcedures = e.target.value;
                  setFieldValue("procedure", selectedProcedures);

                  // Handle procedure change to update the price
                  handleProcedureChange(selectedProcedures);

                  // Если "Навчання" выбрано, снимаем все остальные выбранные процедуры
                  if (isTrainingSelected) {
                    setFieldValue(
                      "procedure",
                      selectedProcedures.filter((item) => item === "Навчання")
                    );
                  }
                }}
                input={<OutlinedInput id="procedure" label="Процедура *" />}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip
                        label={value}
                        onDelete={(e) => {
                          // Prevent the default behavior (opening the select)
                          e.stopPropagation();

                          // Remove the selected procedure from the values.procedure array
                          const updatedProcedures = values.procedure.filter(
                            (item) => item !== value
                          );

                          // Удаление выбранной процедуры из списка выбранных
                          setFieldValue("procedure", updatedProcedures);

                          // Handle procedure change to update the price
                          handleProcedureChange(updatedProcedures);
                        }}
                      />
                    ))}
                  </Box>
                )}
              >
                {procedure.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <ErrorMessage name="procedure" component="div" className="error" />

            <Field
              component={TextField}
              name="contacts"
              label="Додатковий контакт"
              fullWidth
              placeholder="viber/telegram/instagram"
              margin="normal"
              variant="outlined"
              // Здесь добавьте value, чтобы передать значение в TextField
              value={values.contacts}
              onChange={(e) => setFieldValue("contacts", e.target.value)} // Используйте setFieldValue для обновления значения поля
            />

            <Field
              component={TextField}
              name="note"
              label="Примітка"
              fullWidth
              margin="normal"
              variant="outlined"
              multiline
              rows={2}
              // Здесь добавьте value, чтобы передать значение в TextField
              value={values.note}
              onChange={(e) => setFieldValue("note", e.target.value)} // Используйте setFieldValue для обновления значения поля
            />
            {!isTrainingSelected && (
              <div>
                Дата сеансу:{" "}
                {selectedSession ? (
                  selectedSession.date.toDate().toLocaleString("ru-UA", {
                    day: "numeric",
                    month: "numeric",
                    year: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                  })
                ) : (
                  <strong>Не вибрано !</strong>
                )}
              </div>
            )}
            <div className="total-price">
              <p>Ціна: {totalPrice} грн</p>
            </div>

            <Button type="submit" variant="contained" color="secondary">
              Записатись
            </Button>
          </Form>
        )}
      </Formik>
    </Grid>
  );
};

export default AppointmentForm;
