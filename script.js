setTimeout(() => console.log('готово'), 2000)
//================================================

console.log('A')//синхрон
setTimeout(() => console.log('B'), 0) //макро
Promise.resolve().then(() => console.log('C'))//упр асинх опер.
//===============================================

function fetchData(url) {
    return new Promise((resolve, reject) => {//Исполните фун.
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve({ user: 'resolve', url });
            } else if (Math.random() < 0.2) {
                reject({ user: 'reject', url });
            }
        }, 1000); 
    });
}

fetchData("https://example.com")

.then(data => console.log("Успешно:", data))//испл регист колбек
.catch(error => console.error("Ошибка:", error))
//====================================================

fetchData("url1")
  .then((resul1) => {
    console.log("Шаг 1:", resul1);
    return fetchData("url2");
  })
  .then((resul12) => {
    console.log("Шаг 2:", resul12);
    return fetchData("url3");
  })
  .then((result3) => console.log("Шаг 3:", result3))
  .catch((error) => console.error("не получилось(", error.message));
