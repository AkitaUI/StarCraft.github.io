// Функция-конструктор Accumulator
function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function (newValue) {
        this.value += newValue;
    };

    this.reset = function () {
        this.value = 0;
    };
}

// Создаём объект корзины
const cart = new Accumulator(0);
let itemCount = 0;

// Контейнер для карточек товаров в корзине
const cartItemsContainer = document.getElementById('cart-items');

// Обновление отображения корзины
function updateCartDisplay() {
    document.getElementById('cart-count').textContent = itemCount;
    document.getElementById('cart-total').textContent = cart.value;
}

// Обновление отображения карточек товаров в корзине
function updateCartItemsDisplay(productCard) {
    // Создаем клон карточки товара
    const cartCard = productCard.cloneNode(true);

    // Убираем футер (product-footer) из клона, так как он не должен отображаться в корзине
    const footer = cartCard.querySelector('.product-footer');
    if (footer) {
        footer.remove();
    }

    cartCard.classList.add('cart-product-card'); // Добавляем класс для отображения карточек в корзине

    // Убираем кнопку "Добавить в корзину" из клона
    const button = cartCard.querySelector('.add-to-cart');
    if (button) {
        button.remove();
    }

    cartItemsContainer.appendChild(cartCard); // Добавляем карточку в корзину
}

// Очистка отображения карточек товаров в корзине
function clearCartItemsDisplay() {
    cartItemsContainer.innerHTML = ''; // Удаляем все карточки
}

// Обработчики для кнопок "Добавить в корзину"
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
        const productCard = this.closest('.product-card'); // Получаем карточку товара

        const price = parseInt(this.getAttribute('data-price')); // Получаем цену товара
        cart.read(price); // Увеличиваем общую стоимость
        itemCount++; // Увеличиваем количество товаров

        updateCartItemsDisplay(productCard); // Добавляем карточку в область корзины
        updateCartDisplay(); // Обновляем общую информацию корзины
    });
});

// Очистка корзины
document.getElementById("clear-cart").addEventListener("click", function () {
    cart.reset(); // Сбрасываем общую стоимость
    itemCount = 0; // Сбрасываем количество товаров
    clearCartItemsDisplay(); // Удаляем карточки из области корзины
    updateCartDisplay(); // Обновляем общую информацию корзины
});

// Начальная инициализация отображения корзины
updateCartDisplay();
