import * as Yup from "yup";

export const procedure = [
  {
    name: "Ламінування вій (фарбування + ботокс)",
    time: "1 год.",
    price: 750,
  },
  { name: "Кутики", time: "1 год.", price: 600 },
  { name: "Класика", time: "2 год.", price: 700 },
  { name: "Об'єм 2Д", time: "2 год. 15хв", price: 750 },
  { name: "Об'єм 3Д", time: "2 год. 15хв", price: 800 },
  { name: "Об'єм 4Д", time: "2 год. 15хв", price: 900 },
  { name: "Об'єм 5Д-6Д", time: "2 год. 15хв", price: 1000 },
  { name: "Мокрий з розтушовкою", time: "2 год. 15хв", price: 1000 },
  { name: "Аніме ефект", time: "2 год. 15хв", price: 1000 },
  { name: "Навчання", time: "3 дні", price: 5500 },
];
export const procedureDop = [
  { name: "Нижнє нарощення", time: "30 хв.", price: 200 },
  { name: "Зняття іншого майстра", time: "15 хв.", price: 100 },
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
  if (selectedProcedures.includes("Ламінування вій (фарбування + ботокс)")) {
    price += 750; // Adjust the price as needed
  }
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
  if (selectedProcedures.includes("Зняття іншого майстра")) {
    price += 100; // Adjust the price as needed
  }
  if (selectedProcedures.includes("Мокрий з розтушовкою")) {
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
    price = 5500; // Adjust the price as needed
  }
  // Add more conditions for other procedures

  return price;
};
