const { getFirestore, collection, addDoc } = require("firebase/firestore");
const { initializeApp } = require("firebase/app");

const firebaseConfig = {
  apiKey: "AIzaSyBQFTiKg7DCKv2kCZ_CjzG_9Po-imwtmeM",
  authDomain: "ira-site.firebaseapp.com",
  projectId: "ira-site",
  storageBucket: "ira-site.appspot.com",
  messagingSenderId: "16883500777",
  appId: "1:16883500777:web:a0183e891718ac732d5278",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const generateSchedule = async () => {
  // Установим начальную дату 1 октября текущего года
  const startDate = new Date();
  startDate.setMonth(8); // 9 соответствует октябрю (0 - январь, 11 - декабрь)
  startDate.setDate(26);
  startDate.setHours(0, 0, 0, 0);

  // Установим конечную дату 31 октября текущего года
  const endDate = new Date();
  endDate.setMonth(8);
  endDate.setDate(30);
  endDate.setHours(23, 59, 59, 999);

  const currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    // Добавляем четыре сеанса в день
    for (const time of [9, 11, 13, 15]) {
      const sessionDate = new Date(currentDate);
      sessionDate.setHours(time, 0, 0, 0);

      // Добавляем сеанс в Firebase
      try {
        const docRef = await addDoc(collection(db, "sessions"), {
          date: sessionDate,
          // Другая информация о сеансе (например, доступность или номер специалиста)
        });
        console.log("Сеанс успешно добавлен с идентификатором: ", docRef.id);
      } catch (e) {
        console.error("Ошибка при добавлении сеанса: ", e);
      }
    }

    // Переходим к следующей дате
    currentDate.setDate(currentDate.getDate() + 1);
  }
};

generateSchedule();
