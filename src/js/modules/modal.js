function modal () {
   const modalTriggers = document.querySelectorAll('[data-modalbtn="true"]'),
         modal = document.querySelector('.modal');

    modalTriggers.forEach((trigger) => {
            trigger.addEventListener('click', () => {
                modal.classList.add('modal--active');
                disableScroll();
            });
    });

   document.addEventListener('click', function (e) {
        if(e.target.classList.contains('modal--active')) {
            modal.classList.remove('modal--active');
            enableScroll();
        }
    });

   function disableScroll() {
    // Сохранить текущую позицию скролла
    var scrollY = window.scrollY;
  
    // Заморозить скроллинг
    document.body.style.overflow = 'hidden';
    document.body.style.marginRight = '10px'; //отступ на величину скролла
    // Сбросить позицию скролла
    window.scrollTo(0, scrollY);
  }
  
  
  function enableScroll() {
    document.body.style.overflow = 'visible';
    document.body.style.marginRight = '0px';
  }
}

export default modal;