// записываем кнопку в переменную
const btn = document.querySelector('.hero__button');
// записываем модальное окно в переменную
const modal = document.querySelector('.modal');



// добавляем событие при клике на кнопку, запускаем ф-ию
btn.addEventListener('click', () => {
  // добавляем класс для modal
  modal.classList.add('modal_open');
});

modal.addEventListener('click', (event) => {
  // если target события равен modal (оверлей) или кнопка крестик с помощью метода closest
  if (event.target === modal || event.target.closest('.modal__close')) {
    modal.classList.remove('modal_open');
  }
});

