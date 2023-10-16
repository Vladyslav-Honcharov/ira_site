import * as Yup from "yup";

export const procedure = [
  "Класика 1Д",
  "Об'єм 2Д",
  "Об'єм 3Д",
  "Об'єм 4Д",
  "Вії в кольорі Темний шоколад",
  "L/M Вигин Мокрий ефект, Промінчики",
  "Зняття моєї роботи без нарощування",
  "Зняття роботи іншого майстра",
  "Навчання",
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
  if (selectedProcedures.includes("Класика 1Д")) {
    price += 700; // Adjust the price as needed
  }

  if (selectedProcedures.includes("Об'єм 2Д")) {
    price += 750; // Adjust the price as needed
  }

  if (selectedProcedures.includes("Об'єм 3Д")) {
    price += 800; // Adjust the price as needed
  }
  if (selectedProcedures.includes("Об'єм 4Д")) {
    price += 850; // Adjust the price as needed
  }
  if (selectedProcedures.includes("Вії в кольорі Темний шоколад")) {
    price += 50; // Adjust the price as needed
  }
  if (selectedProcedures.includes("L/M Вигин Мокрий ефект, Промінчики")) {
    price += 50; // Adjust the price as needed
  }
  if (selectedProcedures.includes("Зняття моєї роботи без нарощування")) {
    price += 100; // Adjust the price as needed
  }
  if (selectedProcedures.includes("Зняття роботи іншого майстра")) {
    price += 100; // Adjust the price as needed
  }

  if (selectedProcedures.includes("Навчання")) {
    price = 5000; // Adjust the price as needed
  }
  // Add more conditions for other procedures

  return price;
};
