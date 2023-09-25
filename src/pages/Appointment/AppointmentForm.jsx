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
import DatePicker from "react-datepicker"; // Импортируем DatePicker из react-datepicker
import "react-datepicker/dist/react-datepicker.css";
import {
  availableTimes,
  initialValues,
  procedure,
  validationSchema,
} from "./initialAndShema";
import InputMask from "react-input-mask"; // Импортируем библиотеку для маскирования
import Chip from "@mui/material/Chip"; // Импортируем компонент Chip

const AppointmentForm = () => {
  const [isTrainingSelected, setIsTrainingSelected] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0); // State to store the total price

  const calculatePrice = (selectedProcedures) => {
    // Calculate the price based on selected procedures
    let price = 0;

    // You can define the price logic here based on selected procedures
    if (selectedProcedures.includes("Процедура 1")) {
      price += 100; // Adjust the price as needed
    }

    if (selectedProcedures.includes("Процедура 2")) {
      price += 150; // Adjust the price as needed
    }

    if (selectedProcedures.includes("Процедура 3")) {
      price += 200; // Adjust the price as needed
    }
    if (selectedProcedures.includes("Процедура 4")) {
      price += 180; // Adjust the price as needed
    }
    if (selectedProcedures.includes("Навчання")) {
      price = 2000; // Adjust the price as needed
    }
    // Add more conditions for other procedures

    return price;
  };

  const handleProcedureChange = (selectedProcedures) => {
    // Calculate the price when procedures change
    const price = calculatePrice(selectedProcedures);
    setTotalPrice(price);

    // Check if "Навчання" is selected
    const isTrainingSelected = selectedProcedures.includes("Навчання");
    setIsTrainingSelected(isTrainingSelected);
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    // Calculate the total price when the form is submitted
    const price = calculatePrice(values.procedure);
    setTotalPrice(price);
    values.totalPrice = price;
    // Include the total price in the form values

    // After successful form submission, reset the form
    resetForm({
      values: { ...initialValues, totalPrice: 0 }, // Reset total price to 0
    });
    setTotalPrice(0);
  };

  return (
    <Grid item xs={12} md={6} className="appointment-form">
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
            {!isTrainingSelected && (
              <Grid container justifyContent="space-between">
                <Grid
                  item
                  xs={6}
                  // style={{ zIndex: 2 }}
                >
                  <DatePicker
                    selected={
                      values.dateTime ? new Date(values.dateTime) : null
                    }
                    onChange={(date) => {
                      const formattedDate = date
                        ? date.toISOString().split("T")[0]
                        : ""; // Обрезаем время
                      setFieldValue("dateTime", formattedDate); // Обновляем значение dateTime в форме
                    }}
                    dateFormat="dd/MM/yyyy"
                    customInput={
                      <TextField
                        name="dateTime"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        label="Дата *"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    }
                    // Скрыть автозаполнение
                    autoComplete="off"
                    // Применить стили
                    className="custom-datepicker"
                  />

                  <ErrorMessage
                    name="dateTime"
                    component="div"
                    className="error"
                  />
                </Grid>
                <Grid item xs={4} md={6} sx={{ mt: 2 }}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="time">Час *</InputLabel>
                    <Select
                      labelId="time-label"
                      id="time"
                      name="time"
                      value={values.time}
                      onChange={(e) => {
                        setFieldValue("time", e.target.value);
                      }}
                      label="Час *"
                    >
                      <MenuItem value="" disabled>
                        Виберіть час *
                      </MenuItem>
                      {availableTimes.map((timeSlot) => (
                        <MenuItem key={timeSlot} value={timeSlot}>
                          {timeSlot}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <ErrorMessage name="time" component="div" className="error" />
                </Grid>
              </Grid>
            )}
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
            <div className="total-price">
              <p>Ціна: {totalPrice} грн</p>
            </div>

            <Button type="submit" variant="contained" color="primary">
              Записатись
            </Button>
          </Form>
        )}
      </Formik>
    </Grid>
  );
};

export default AppointmentForm;
