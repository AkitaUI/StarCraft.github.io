window.addEventListener('scroll', function () {
    let scrolled = window.scrollY;

    // Параллакс для MainPage
    const mainBackground = document.querySelector('.MainPage .background');
    if (mainBackground) {
        mainBackground.style.transform = `translateY(${scrolled * 0.3}px)`;
    }

    // Параллакс для SinglAndMultiPlayer
    const secondBackground = document.querySelector('.SinglAndMultiPlayer .background');
    if (secondBackground) {
        const blockOffsetTop = secondBackground.closest('.Block').offsetTop;
        const windowHeight = window.innerHeight;
        const blockHeight = secondBackground.closest('.Block').offsetHeight;
        const relativeScroll = scrolled - blockOffsetTop;

        // Проверяем, если блок частично или полностью в зоне видимости
        if (relativeScroll > -windowHeight && relativeScroll < blockHeight) {
            // Смещение параллакса с учетом изначального положения
            secondBackground.style.transform = `translateY(${relativeScroll * 0.3}px)`;
        } else {
            // Если блок вне зоны видимости, сбрасываем transform
            secondBackground.style.transform = 'translateY(-20%)';
        }
    }

    // Параллакс для SinglAndMultiPlayer
    const thirdBackground = document.querySelector('.AskForRegistration .background');
    if (thirdBackground) {
        const blockOffsetTop = thirdBackground.closest('.Block').offsetTop;
        const windowHeight = window.innerHeight;
        const blockHeight = thirdBackground.closest('.Block').offsetHeight;
        const relativeScroll = scrolled - blockOffsetTop;

        // Проверяем, если блок частично или полностью в зоне видимости
        if (relativeScroll > -windowHeight && relativeScroll < blockHeight) {
            // Смещение параллакса с учетом изначального положения
            thirdBackground.style.transform = `translateY(${relativeScroll * 0.3}px)`;
        } else {
            // Если блок вне зоны видимости, сбрасываем transform
            thirdBackground.style.transform = 'translateY(-20%)';
        }
    }
});