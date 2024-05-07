import * as Yup from "yup";

export const procedure = [
  "Кутики",
  "Класика",
  "Об'єм 2Д",
  "Об'єм 3Д",
  "Об'єм 4Д",
  "Об'єм 5Д-6Д",
  "Нижнє нарощення",
  "Мокрий з розтушкою",
  "Аніме ефект",
  "Навчання",
];

// export const availableTimes = ["08:00", "12:00", "15:00", "17:00"]; // Опции времени

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
  if (selectedProcedures.includes("Кутики")) {
    price += 600; // Adjust the price as needed
  }

  if (selectedProcedures.includes("Класика")) {
    price += 700; // Adjust the price as needed
  }

  if (selectedProcedures.includes("Об'єм 2Д")) {
    price += 750; // Adjust the price as needed
  }

  if (selectedProcedures.includes("Об'єм 3Д")) {
    price += 800; // Adjust the price as needed
  }
  if (selectedProcedures.includes("Об'єм 4Д")) {
    price += 900; // Adjust the price as needed
  }
  if (selectedProcedures.includes("Об'єм 5Д-6Д")) {
    price += 1000; // Adjust the price as needed
  }
  if (selectedProcedures.includes("Нижнє нарощення")) {
    price += 200; // Adjust the price as needed
  }
  if (selectedProcedures.includes("Мокрий з розтушкою")) {
    price += 1000; // Adjust the price as needed
  }
  if (selectedProcedures.includes("Аніме ефект")) {
    price += 1000; // Adjust the price as needed
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
