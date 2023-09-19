function construct () {
  const cardCheckboxes = document.querySelectorAll('.tariff-card__custom-checkbox input');


  cardCheckboxes.forEach((checkbox) => {

    checkbox.addEventListener('click', () => {

      let summarylist = document.querySelector('.summary__list');
      let summarylistitems = summarylist.querySelectorAll('.summary__item');

      if (checkbox.checked) {
        appendLi(checkbox, summarylist);
      } else {
           
          summarylistitems.forEach((item) => {
          if (item.firstElementChild.textContent == checkbox.parentNode.parentNode.dataset.name) {
            summarylist.removeChild(item)
            return;
          }
        })

      }

      
      // console.log(summarylistitems);
    })
  })

  function appendLi(arg1, arg2) { // добавить элемент на страницу arg1 чекбокс, arg2 блок в который append
      let li = document.createElement('li');
      let itemTitle = arg1.parentNode.parentNode.dataset.name;
      let itemPrice = arg1.parentNode.parentNode.dataset.price;
      let itemData = arg1.parentNode.parentNode.dataset.regular;

      li.className = "summary__item";
      li.innerHTML = 
      `
      <div class="summary__item-title">${itemTitle}</div>
      <div class="summary__item-price" data-regular="${itemData}">${itemPrice} ₽</div>
      `;

      arg2.append(li);
  }
  

  function updateTotalSum() {
    // Находим все элементы с классом "summary__item-price"
    var priceElements = document.querySelectorAll('.summary__item-price');

    // Инициализируем переменные для хранения сумм
    var totalSum = 0; // Для суммы с атрибутом data-regular="false"
    var totalSumMonth = 0; // Для суммы с атрибутом data-regular="true"

    // Перебираем найденные элементы и суммируем их значения
    priceElements.forEach(function(priceElement) {
      // Извлекаем текстовое содержимое элемента и удаляем символы, кроме цифр
      var priceText = priceElement.textContent.trim();
      var price = parseFloat(priceText.replace(/[^\d.]/g, ''));

      // Извлекаем значение атрибута data-regular
      var isRegular = priceElement.dataset.regular === 'true';

      // Если удалось преобразовать текст в число, добавляем его к соответствующей сумме
      if (!isNaN(price)) {
          if (isRegular) {
              totalSumMonth += price;
          } else {
              totalSum += price;
          }
      }
    });

    // Обновляем значение элементов, отображающих общие суммы
    var totalSumElement = document.querySelector('.summary__ot-payment-price'); // Для вывода суммы Одноразовых оплат
    var totalSumElementMonth = document.querySelector('.summary__monthly-payment-price'); // Для вывода суммы Помесячных оплат
    
    if (totalSumElement) {
        totalSumElement.textContent = totalSum + ' ₽';
    }

    if (totalSumElementMonth) {
        totalSumElementMonth.textContent = totalSumMonth + ' ₽';
    }
  }

  // Вызываем функцию для первоначального расчета суммы
  updateTotalSum();

  // Настраиваем отслеживание изменений DOM
  var summaryList = document.querySelector('.summary__list');
  if (summaryList) {
      var observer = new MutationObserver(function(mutationsList) {
          // Вызываем функцию при каждом изменении DOM
          updateTotalSum();
          
      });

      // Начинаем отслеживать изменения внутри элемента .summary__list
      observer.observe(summaryList, { childList: true });
  }

}

export default construct;