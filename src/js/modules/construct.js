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

      li.className = "summary__item";
      li.innerHTML = 
      `
      <div class="summary__item-title">${itemTitle}</div>
      <div class="summary__item-price">${itemPrice} ₽</div>
      `;

      arg2.append(li);
  }
  
}

export default construct;