import * as Yup from "yup";

export const procedure = [
  "Навчання",
  "Процедура 1",
  "Процедура 2",
  "Процедура 3",
  "Процедура 4",
];

export const availableTimes = ["08:00", "12:00", "15:00", "17:00"]; // Опции времени

export const validationSchema = Yup.object().shape({
  client: Yup.string().required("Ім'я обов'язкове"),
  phone: Yup.string()
    .required("Телефон обов'язковий")
    .matches(
      /^\+380\d{9}$/,
      "Номер телефона повинен починатися з +380 і мати 12 цифр"
    ),
  procedure: Yup.array().min(1, "Виберіть хоча б одну процедуру"),
  // dateTime: Yup.string().required("Ім'я обов'язкове"),
});

export const initialValues = {
  client: "",
  phone: "",
  procedure: [],
  // dateTime: "",
  contacts: "",
  note: "",
  // time: "", // Добавьте поле "time" с начальным значением
};

export const calculatePrice = (selectedProcedures) => {
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
