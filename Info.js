// Получение всех звёздочек
const stars = document.querySelectorAll('.star');
let ratings = []; // Массив для хранения всех оценок

/**
 * Функция для обновления процентов в иконках
 */
function updateIcons() {
    const total = ratings.length; // Общее количество оценок
    const greenCount = ratings.filter(r => r >= 4).length; // Количество оценок 4-5 звёзд
    const yellowCount = ratings.filter(r => r === 3).length; // Количество оценок 3 звезды
    const redCount = ratings.filter(r => r <= 2).length; // Количество оценок 1-2 звезды

    // Расчёт процентов
    const greenPercent = total > 0 ? (greenCount / total * 100).toFixed(1) : 0;
    const yellowPercent = total > 0 ? (yellowCount / total * 100).toFixed(1) : 0;
    const redPercent = total > 0 ? (redCount / total * 100).toFixed(1) : 0;

    // Обновление текста в иконках
    document.getElementById('green-icon').textContent = `${greenPercent}%`;
    document.getElementById('yellow-icon').textContent = `${yellowPercent}%`;
    document.getElementById('red-icon').textContent = `${redPercent}%`;
}

/**
 * Обработчик клика по звёздочке
 */
stars.forEach(star => {
    star.addEventListener('click', () => {
        const value = parseInt(star.dataset.value); // Получаем значение выбранной звезды
        ratings.push(value); // Добавляем оценку в массив
        updateIcons(); // Обновляем проценты в иконках

        // Подсвечиваем выбранные звёзды
        stars.forEach(s => s.classList.remove('selected')); // Убираем выделение со всех звёзд
        for (let i = 0; i < value; i++) {
            stars[i].classList.add('selected'); // Выделяем звёзды от 1 до выбранной
        }
    });
});
