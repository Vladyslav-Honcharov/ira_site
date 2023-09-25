import * as Yup from "yup";

export const procedure = [
  "Навчання",
  "Процедура 1",
  "Процедура 2",
  "Процедура 3",
  "Процедура 4",
];

export const availableTimes = ["08:30", "12:00", "15:00", "17:00"]; // Опции времени

export const validationSchema = Yup.object().shape({
  client: Yup.string().required("Ім'я обов'язкове"),
  phone: Yup.string()
    .required("Телефон обов'язковий")
    .matches(
      /^\+380\d{9}$/,
      "Номер телефона повинен починатися з +380 і мати 12 цифр"
    ),
  procedure: Yup.array().min(1, "Виберіть хоча б одну процедуру"),
  dateTime: Yup.string().test(
    "dateTime",
    "Дата і час обов'язкові",
    function (value) {
      // Проверяем, выбрана ли процедура "Навчання"
      const isTrainingSelected = this.parent.procedure.includes("Навчання");

      // Если процедура "Навчання" выбрана, dateTime не обязательна
      if (isTrainingSelected) {
        return true;
      }

      // В противном случае, dateTime должна быть заполнена
      return !!value;
    }
  ),
});

export const initialValues = {
  client: "",
  phone: "",
  procedure: [],
  dateTime: "",
  contacts: "",
  note: "",
  time: "", // Добавьте поле "time" с начальным значением
};
